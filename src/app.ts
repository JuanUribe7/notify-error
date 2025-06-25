import 'reflect-metadata'; // Importante para algunos patrones de DI o librerías
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import express from 'express';
import dotenv from 'dotenv';
import serverlessExpress from '@vendia/serverless-express';


import { ErrorIngestionController } from './controller/ErrorIngestionController';
import { ISendNotificationBL } from './domain/ISendNotificationBL'; 
import { SendNotificationBL } from './domain/SendNotificationBL';   
import { IChatNotificationAPI } from './repositories/IChatNotificationAPI';     
import { SlackNotificationAPI } from './repositories/SlackNotificationAPI';   
import { ErrorMiddleware } from './services/ErrorHandlingService';
import config from './core/config';
import { DefaultValues } from './core/utils/Constants';
import { Logger } from '@aws-lambda-powertools/logger';

dotenv.config({ path: './.env' }); 

const logger = new Logger({ serviceName: "ErrorNotifier-Main" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


logger.info("Initializing application components...");


const slackNotificationApi: IChatNotificationAPI = new SlackNotificationAPI();


const sendNotificationUseCase: ISendNotificationBL = new SendNotificationBL(slackNotificationApi);


const errorIngestionController: ErrorIngestionController = new ErrorIngestionController(sendNotificationUseCase);
 
app.post('/', errorIngestionController.handleExpressRequest.bind(errorIngestionController));

app.use(ErrorMiddleware);


if (config.NODE_ENVIRONMENT === DefaultValues.NODE_ENV_LOCAL) {
    const LOCAL_PORT = process.env.PORT || 3000;
    app.listen(LOCAL_PORT, () => {
        logger.info(`Local Express server running on http://localhost:${LOCAL_PORT}`);
        logger.warn("Running in LOCAL environment. This setup is for local testing only.");
    });
}


let cachedServer: any;

export const lambdaHandler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    logger.info("Lambda function invoked for Error Notifier.", {
        awsRequestId: context.awsRequestId,
        sourceIp: event.requestContext?.identity?.sourceIp,
        path: event.path,
        method: event.httpMethod,
        stage: event.requestContext?.stage
    });

    if (!cachedServer) {
        cachedServer = serverlessExpress({ app });
        logger.info('Serverless Express initialized (cold start).');
    } else {
        logger.info('Using cached Serverless Express instance (warm start).');
    }

    return cachedServer(event, context);
};