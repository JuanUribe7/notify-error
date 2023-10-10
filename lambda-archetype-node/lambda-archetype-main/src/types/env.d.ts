import { DefaultValues } from '../core/utils/Constants';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_KEY: string;
            API_URL: string;
            NODE_ENVIRONMENT: DefaultValues.NODE_ENV_LOCAL | DefaultValues.NODE_ENV_DEV | DefaultValues.NODE_ENV_PROD;
            MYSQL_HOST_LOCAL: string;
            MYSQL_USER_LOCAL: string;
            MYSQL_PASSWORD_LOCAL: string;
            MYSQL_DATABASE_LOCAL: string;
            MYSQL_PORT_LOCAL: string;
            MYSQL_HOST_DEV: string;
            MYSQL_USER_DEV: string;
            MYSQL_PASSWORD_DEV: string;
            MYSQL_DATABASE_DEV: string;
            MYSQL_PORT_DEV: string;
            MYSQL_HOST_PROD: string;
            MYSQL_USER_PROD: string;
            MYSQL_PASSWORD_PROD: string;
            MYSQL_DATABASE_PROD: string;
            MYSQL_PORT_PROD: string;
        }
    }
}
export {};
