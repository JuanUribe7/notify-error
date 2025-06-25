import { Response } from 'express';
import { ISendNotificationBL } from '../domain/ISendNotificationBL';
import { TypedRequestBody } from '../types/TypedRequestBody';
import { ErrorEvent } from '../domain//models/ErrorEvent';
import { Logger } from '@aws-lambda-powertools/logger';
import { ResponseWriter } from '../core/common/ResponseWriter'; 
import { HttpStatus } from '../core/utils/Constants'; 
import { IErrorIngestionController } from './IErrorIngestionController'; 
import { APIResponse } from "../core/common/types"; 


const logger = new Logger({
    serviceName: "ErrorNotifier-Controller"
});

export class ErrorIngestionController implements IErrorIngestionController {
    constructor(private readonly sendNotificationUseCase: ISendNotificationBL) {}

   
    async handleErrorIngestion(req: TypedRequestBody<any>, res: Response): Promise<APIResponse> {
        try {
            const rawErrorData = req.body;
            logger.info('Received incoming error request for processing.', { payload: rawErrorData });

            await this.sendNotificationUseCase.execute(rawErrorData);

            return ResponseWriter.objectResponse(HttpStatus.OK, { message: 'Error processed and notification attempt initiated successfully.' });
        } catch (error: any) {
            logger.error(`Error in ErrorIngestionController during request handling: ${error.message}`, {
                originalError: error,
                requestBody: req.body
            });
          
            return ResponseWriter.objectResponse(HttpStatus.INTERNAL_SERVER_ERROR, { message: 'Failed to process error', details: error.message });
        }
    }

   
    public async handleExpressRequest(req: TypedRequestBody<ErrorEvent | any>, res: Response): Promise<void> {
        try {
            const apiResponse = await this.handleErrorIngestion(req, res);
            res.status(apiResponse.statusCode).send(apiResponse.body);
        } catch (error) {

            throw error;
        }
    }
}