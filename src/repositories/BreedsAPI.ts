
// import axios from 'axios';
// import config from '../core/config';
// import { IBreedsAPI } from './IBreedsAPI';
// import { BreedDTO } from './dtos/breed-response-api';

// export class BreedsAPI implements IBreedsAPI {

//     public async getCatBreeds(): Promise<BreedDTO[]> {

//         const {
//             BREEDS : { API_URL, API_KEY },
//         } = config;

//         const { data } = await axios.get(API_URL, {
//             headers: {
//                 'x-api-key': API_KEY,
//             },
//         });

//         return data as BreedDTO[];

//     }
// }
