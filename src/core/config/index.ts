import { DefaultValues } from '../utils/Constants';





const SLACK_WEBHOOK_URL: Record<string, string> = {
    dev: 'https://hooks.slack.com/services/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',
    qa: 'https://hooks.slack.com/services/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',
    prod: 'https://hooks.slack.com/services/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'
};
export default {

    NODE_ENVIRONMENT: process.env.NODE_ENVIRONMENT ?? DefaultValues.NODE_ENV_LOCAL,
    SLACK_WEBHOOK_URL: SLACK_WEBHOOK_URL[process.env.NODE_ENVIRONMENT?.toLowerCase() ?? 'dev'] ?? DefaultValues.EMPTY_STRING,

};
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // DATABASE: {

        
    //     LOCAL: {
    //         host: process.env.MYSQL_HOST ?? DefaultValues.EMPTY_STRING,
    //         user: process.env.MYSQL_USER?? DefaultValues.EMPTY_STRING,
    //         password: process.env.MYSQL_PASSWORD ?? DefaultValues.EMPTY_STRING,
    //         database: process.env.MYSQL_DATABASE ?? DefaultValues.EMPTY_STRING,
    //         port: Number(process.env.MYSQL_PORT) ?? DefaultValues.ZERO_PORT,
    //         logLevel: process.env.LOG_LEVEL ?? DefaultValues.EMPTY_STRING,
    //     },
    //     DEV: {
    //         host: process.env.MYSQL_HOST ?? DefaultValues.EMPTY_STRING,
    //         user: process.env.MYSQL_USER?? DefaultValues.EMPTY_STRING,
    //         password: process.env.MYSQL_PASSWORD ?? DefaultValues.EMPTY_STRING,
    //         database: process.env.MYSQL_DATABASE ?? DefaultValues.EMPTY_STRING,
    //         port: Number(process.env.MYSQL_PORT) ?? DefaultValues.ZERO_PORT,
    //         logLevel: process.env.LOG_LEVEL ?? DefaultValues.EMPTY_STRING,
    //     },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    //     PROD: {
    //         host: process.env.MYSQL_HOST ?? DefaultValues.EMPTY_STRING,
    //         user: process.env.MYSQL_USER?? DefaultValues.EMPTY_STRING,
    //         password: process.env.MYSQL_PASSWORD ?? DefaultValues.EMPTY_STRING,
    //         database: process.env.MYSQL_DATABASE ?? DefaultValues.EMPTY_STRING,
    //         port: Number(process.env.MYSQL_PORT) ?? DefaultValues.ZERO_PORT,
    //         logLevel: process.env.LOG_LEVEL ?? DefaultValues.EMPTY_STRING,
    //     },
    //     QA: {
    //         host: process.env.MYSQL_HOST ?? DefaultValues.EMPTY_STRING,
    //         user: process.env.MYSQL_USER?? DefaultValues.EMPTY_STRING,
    //         password: process.env.MYSQL_PASSWORD ?? DefaultValues.EMPTY_STRING,
    //         database: process.env.MYSQL_DATABASE ?? DefaultValues.EMPTY_STRING,
    //         port: Number(process.env.MYSQL_PORT) ?? DefaultValues.ZERO_PORT,
    //         logLevel: process.env.LOG_LEVEL ?? DefaultValues.EMPTY_STRING,
    //     },
    // },
    // BREEDS: {
    //     API_URL: process.env.API_URL ?? DefaultValues.EMPTY_STRING,
    //     API_KEY: process.env.API_KEY ?? DefaultValues.EMPTY_STRING,
    // },
    // SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL!,


