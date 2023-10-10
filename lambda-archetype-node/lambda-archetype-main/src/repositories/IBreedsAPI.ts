import { BreedDTO } from "./dtos/breed-response-api";

export interface IBreedsAPI { 

   getCatBreeds(): Promise<BreedDTO[]>;

}