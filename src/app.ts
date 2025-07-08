import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import dotenv from 'dotenv';

import { ErrorIngestionController } from './controller/ErrorIngestionController';
import { ISendNotificationBL } from './domain/ISendNotificationBL';
import { SendNotificationBL } from './domain/SendNotificationBL';
import { IChatNotificationAPI } from './repositories/IChatNotificationAPI';
import { SlackNotificationAPI } from './repositories/SlackNotificationAPI';
import config from './core/config';
import { Logger } from '@aws-lambda-powertools/logger';

dotenv.config({ path: './.env' });

const logger = new Logger({ serviceName: 'ErrorNotifier-Main' });

logger.info('Initializing application components...');

const slackNotificationApi: IChatNotificationAPI = new SlackNotificationAPI();
const sendNotificationUseCase: ISendNotificationBL = new SendNotificationBL(slackNotificationApi);
const errorIngestionController: ErrorIngestionController = new ErrorIngestionController(sendNotificationUseCase);

export const lambdaHandler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    logger.info('Lambda function invoked for Error Notifier.', {
        awsRequestId: context.awsRequestId,
        sourceIp: event.requestContext?.identity?.sourceIp,
        path: event.path,
        method: event.httpMethod,
        stage: event.requestContext?.stage,
    });

    try {
        // Parse the body from the event
const requestBody = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
        const response = await errorIngestionController.handleRequest(requestBody);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Notification sent successfully',
                data: response,
            }),
        };
    } catch (error) {
        logger.error('Error processing request', { error });

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Internal Server Error',
                error: error instanceof Error ? error.message : String(error),
            }),
        };
    }
};