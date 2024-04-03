import 'reflect-metadata';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { BreeedController } from './controller/BreedController';
import { ResponseWriter } from './core/common/ResponseWriter';
import { BreedsBL } from './domain/BreedsBL';
import { BreedsAPI } from './repositories/BreedsAPI';

export const lambdaHandler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {

    const controller: BreeedController = new BreeedController(new BreedsBL(new BreedsAPI()));
    console.log(await controller.getBreeds());
    return await controller.getBreeds();

};
