
import { ErrorEvent } from './models/ErrorEvent';

export interface ChatNotificationPort {
    sendNotification(error: ErrorEvent): Promise<void>;
}