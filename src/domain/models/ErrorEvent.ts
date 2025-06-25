
export interface ErrorEvent {
    serviceName: string;
    errorMessage: string;
    stackTrace?: string;
    timestamp: string;
    severity: 'info' | 'warning' | 'error' | 'critical';
    metadata?: Record<string, any>;
}