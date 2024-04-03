
import { BreedMapper } from "./mappers/BreedMapper";
import { IBreedsBL } from "./IBreedsBL";
import { IBreedsAPI } from "../repositories/IBreedsAPI";

export class BreedsBL implements IBreedsBL {
    
    constructor(private breedsRepository: IBreedsAPI) { }
    
    public async getBreeds(): Promise<BreedDomain[]> {
        const breeds = await this.breedsRepository.getCatBreeds();
        return breeds.map(BreedMapper.toDomain);
    }
}