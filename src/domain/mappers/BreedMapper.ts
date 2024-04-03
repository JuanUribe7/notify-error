import { BreedDTO } from "../../repositories/dtos/breed-response-api";

export class BreedMapper{

    static toDomain(BreedDto: BreedDTO) : BreedDomain {
        return {
            name : BreedDto.name,
            description : BreedDto.description,
            image : BreedDto.image ? BreedDto.image.url : "Without image"
        }
    }

}