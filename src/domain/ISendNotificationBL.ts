

export interface ISendNotificationBL{
    execute(rawErrorData: any): Promise<void>;
}