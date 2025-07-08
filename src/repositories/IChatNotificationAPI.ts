import { ErrorEvent } from '../domain/models/ErrorEvent'; // Importa el modelo de dominio

export interface IChatNotificationAPI {
    sendNotification(error: ErrorEvent): Promise<void>;
}