import { DefaultValues } from '../core/utils/Constants';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SLACK_WEBHOOK_URL: string;
            API_KEY: string;
            API_URL: string;
            NODE_ENVIRONMENT: DefaultValues.NODE_ENV_LOCAL | DefaultValues.NODE_ENV_DEV | DefaultValues.NODE_ENV_PROD | DefaultValues.NODE_ENV_QA;
            MYSQL_HOST: string;
            MYSQL_USER: string;
            MYSQL_PASSWORD: string;
            MYSQL_DATABASE: string;
            MYSQL_PORT: string;
            LOG_LEVEL: string;
            API_KEY: string;
            API_URL: string;
        }
    }
}
export {};
