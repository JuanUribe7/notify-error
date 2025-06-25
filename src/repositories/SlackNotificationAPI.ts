import axios from 'axios';
import { Logger } from '@aws-lambda-powertools/logger';
import config from '../core/config';
import { IChatNotificationAPI } from './IChatNotificationAPI';
import { ErrorEvent } from '../domain/models/ErrorEvent';

const logger = new Logger({
    serviceName: "SlackNotificationAPI"
});

export class SlackNotificationAPI implements IChatNotificationAPI {
    private slackWebhookUrl: string;

    constructor() {
        this.slackWebhookUrl = config.SLACK_WEBHOOK_URL;
        if (!this.slackWebhookUrl) {
            logger.error('SLACK_WEBHOOK_URL is not set in config. Slack notifications will be skipped.');
        }
    }

    async sendNotification(error: ErrorEvent): Promise<void> {
        if (!this.slackWebhookUrl) {
            logger.warn('Cannot send Slack notification: Webhook URL is not configured.');
            return;
        }

        const slackMessage = this.formatSlackMessage(error);

        try {
            logger.info(`Attempting to send message to Slack for service: ${error.serviceName}`);
            await axios.post(this.slackWebhookUrl, { text: slackMessage });
            logger.info('Error notification successfully sent to Slack.');
        } catch (axiosError: any) {
            logger.error(`Failed to send notification to Slack for service ${error.serviceName}: ${axiosError.message}`, {
                errorDetails: axiosError.response?.data || axiosError.message
            });
            throw new Error(`Failed to send Slack notification: ${axiosError.message}`);
        }
    }

    private formatSlackMessage(error: ErrorEvent): string {
        let message = `*🚨 ERROR en <span class="math-inline">\{error\.serviceName\} \(</span>{error.severity.toUpperCase()})*\n`;
        message += `*Mensaje:* ${error.errorMessage}\n`;

        if (error.stackTrace) {
            const stackTracePreview = error.stackTrace.substring(0, 1500) + (error.stackTrace.length > 1500 ? '...' : '');
            message += `*Stack Trace:*\n\`\`\`\n${stackTracePreview}\n\`\`\`\n`;
        }
        message += `*Timestamp:* ${new Date(error.timestamp).toLocaleString('es-CO', { timeZone: 'America/Bogota' })}\n`;

        if (error.metadata && Object.keys(error.metadata).length > 0) {
            message += `*Metadatos:*\n\`\`\`json\n${JSON.stringify(error.metadata, null, 2)}\n\`\`\`\n`;
        }
        return message;
    }
}