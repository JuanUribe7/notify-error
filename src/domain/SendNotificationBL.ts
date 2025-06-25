import { ChatNotificationPort } from './ChatNotificationPort';
import { ErrorParserPort } from './ErrorParserPort';
import { ErrorEvent } from '../domain/models/ErrorEvent';
import { ISendNotificationBL } from './ISendNotificationBL';
import { Logger } from '@aws-lambda-powertools/logger';
import config from '../core/config';
import { DefaultValues } from '../core/utils/Constants';

const logger = new Logger({
    serviceName: "ErrorNotifier-UseCase"
});

export class SendNotificationBL implements ISendNotificationBL {
    constructor(
        private readonly chatNotificationGateway: ChatNotificationPort,
        private readonly errorParserGateway?: ErrorParserPort
    ) {}

    async execute(rawErrorData: any): Promise<void> {
        let errorEvent: ErrorEvent;

        try {
            if (this.errorParserGateway) {
                errorEvent = this.errorParserGateway.parse(rawErrorData);
                logger.info(`Error successfully parsed from raw data for service: ${errorEvent.serviceName}`);
            } else {
                errorEvent = rawErrorData as ErrorEvent;
                logger.info(`Processing raw error event without explicit parser for service: ${errorEvent.serviceName || 'Unknown'}`);

                if (!errorEvent.serviceName || !errorEvent.errorMessage || !errorEvent.timestamp || !errorEvent.severity) {
                    const validationError = new Error('Invalid error event format: Missing essential fields (serviceName, errorMessage, timestamp, severity).');
                    logger.error(validationError.message, { rawData: rawErrorData });
                    throw validationError;
                }
            }

            if (config.NODE_ENVIRONMENT === DefaultValues.NODE_ENV_PROD && errorEvent.severity === 'info') {
                logger.info(`Skipping 'info' severity error in PROD environment for service: ${errorEvent.serviceName}`);
                return;
            }

            await this.chatNotificationGateway.sendNotification(errorEvent);
            logger.info(`Notification sent successfully to chat for service: ${errorEvent.serviceName}`);

        } catch (error: any) {
            logger.error(`Failed to execute SendNotificationUseCase for raw data: ${error.message}`, {
                error: error.message,
                stack: error.stack,
                rawData: rawErrorData
            });
            throw error;
        }
    }
}