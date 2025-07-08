import { APIGatewayProxyResult } from 'aws-lambda';
import { ISendNotificationBL } from '../domain/ISendNotificationBL';
import { ErrorEvent } from '../domain/models/ErrorEvent';
import { Logger } from '@aws-lambda-powertools/logger';
import { HttpStatus } from '../core/utils/Constants';
import { IErrorIngestionController } from './IErrorIngestionController';
import { APIResponse } from '../core/common/types';
import { Response } from 'express';
import { TypedRequestBody } from '../types/TypedRequestBody';

const logger = new Logger({
    serviceName: 'ErrorNotifier-Controller',
});

export class ErrorIngestionController implements IErrorIngestionController {
    constructor(private readonly sendNotificationUseCase: ISendNotificationBL) {}
    handleErrorIngestion(req: TypedRequestBody<ErrorEvent | any>, res: Response): Promise<APIResponse> {
        throw new Error('Method not implemented.');
    }

    public async handleRequest(body: ErrorEvent | any): Promise<APIGatewayProxyResult> {
        try {
            logger.info('Received incoming error request for processing.', { payload: body });

            await this.sendNotificationUseCase.execute(body);

            return {
                statusCode: HttpStatus.OK,
                body: JSON.stringify({
                    message: 'Error processed and notification attempt initiated successfully.',
                }),
            };
        } catch (error: any) {
            logger.error(`Error in ErrorIngestionController during request handling: ${error.message}`, {
                originalError: error,
                requestBody: body,
            });

            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                body: JSON.stringify({
                    message: 'Failed to process error',
                    details: error.message,
                }),
            };
        }
    }
}