import { DefaultValues } from '../utils/Constants';

export default {
    NODE_ENVIRONMENT: process.env.NODE_ENVIRONMENT ?? DefaultValues.NODE_ENV_LOCAL,
    DATABASE: {
        LOCAL: {
            host: process.env.MYSQL_HOST_LOCAL ?? DefaultValues.EMPTY_STRING,
            user: process.env.MYSQL_USER_LOCAL ?? DefaultValues.EMPTY_STRING,
            password: process.env.MYSQL_PASSWORD_LOCAL ?? DefaultValues.EMPTY_STRING,
            database: process.env.MYSQL_DATABASE_LOCAL ?? DefaultValues.EMPTY_STRING,
            port: Number(process.env.MYSQL_PORT_LOCAL) ?? DefaultValues.ZERO_PORT,
        },
        DEV: {
            host: process.env.MYSQL_HOST_DEV ?? DefaultValues.EMPTY_STRING,
            user: process.env.MYSQL_USER_DEV ?? DefaultValues.EMPTY_STRING,
            password: process.env.MYSQL_PASSWORD_DEV ?? DefaultValues.EMPTY_STRING,
            database: process.env.MYSQL_DATABASE_DEV ?? DefaultValues.EMPTY_STRING,
            port: Number(process.env.MYSQL_PORT_DEV) ?? DefaultValues.ZERO_PORT,
        },
        PROD: {
            host: process.env.MYSQL_HOST_PROD ?? DefaultValues.EMPTY_STRING,
            user: process.env.MYSQL_USER_PROD ?? DefaultValues.EMPTY_STRING,
            password: process.env.MYSQL_PASSWORD_PROD ?? DefaultValues.EMPTY_STRING,
            database: process.env.MYSQL_DATABASE_PROD ?? DefaultValues.EMPTY_STRING,
            port: Number(process.env.MYSQL_PORT_PROD) ?? DefaultValues.ZERO_PORT,
        },
    },
};
