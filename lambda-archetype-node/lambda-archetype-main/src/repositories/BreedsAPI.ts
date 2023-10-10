
import { IBreedsAPI } from './IBreedsAPI';
import { BreedDTO } from './dtos/breed-response-api';

interface IApiOptions {
    method: string;
    headers: {
        'x-api-key': string;
    };
}

const options: IApiOptions = {
    method: 'GET',
    headers: {
        'x-api-key': process.env.API_KEY,
    },
};

export class BreedsAPI implements IBreedsAPI {
    public async getCatBreeds(): Promise<BreedDTO[]> {
        const response = await fetch(process.env.API_URL, options);
        return <BreedDTO[]>JSON.parse(JSON.stringify(response.json));
    }
}
