import { Request, Response, NextFunction } from 'express';
import { Logger } from '@aws-lambda-powertools/logger';
import { HttpStatus, DefaultValues } from '../core/utils/Constants'; 
import config from '../core/config';

const logger = new Logger({
    serviceName: "ErrorNotifier-ErrorMiddleware"
});

export const ErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction): void => {
    logger.error(`Unhandled error caught by middleware: ${err.message}`, {
        error: err,
        path: req.path,
        method: req.method,
        body: req.body
    });

    if (res.headersSent) {
        return next(err);
    }

    const statusCode = err.statusCode || err.status || HttpStatus.INTERNAL_SERVER_ERROR;
    const message = err.publicMessage || err.message || 'An unexpected error occurred.';

    res.status(statusCode).json({
        status: 'error',
        message: message,
        ...(config.NODE_ENVIRONMENT !== DefaultValues.NODE_ENV_PROD && { stack: err.stack }),
    });
};