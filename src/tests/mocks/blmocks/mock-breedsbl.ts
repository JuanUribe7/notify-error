import { BreedDTO } from "../../../repositories/dtos/breed-response-api"

export const mockRepositoryResponse = {
    getCatBreeds: jest.fn()
}
export const mockBreedsEmpty:Array<BreedDTO> = []

export const mockBreeds:Array<BreedDTO> = [
    {
        weight: { imperial: '7 - 10', metric: '3 - 5' },
        id: '',
        name: '',
        temperament: '',
        origin: '',
        country_codes: '',
        country_code: '',
        description: '',
        life_span: '',
        indoor: 0,
        adaptability: 0,
        affection_level: 0,
        child_friendly: 0,
        dog_friendly: 0,
        energy_level: 0,
        grooming: 0,
        health_issues: 0,
        intelligence: 0,
        shedding_level: 0,
        social_needs: 0,
        stranger_friendly: 0,
        vocalisation: 0,
        experimental: 0,
        hairless: 0,
        natural: 0,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        hypoallergenic: 0,
        image: { 
            url: 'estaeslaurl.co/image.jpg', 
            id: '',
            width: 0,
            height: 0 
        }
    },
    {
        weight: { imperial: '7 - 10', metric: '3 - 5' },
        id: '',
        name: '',
        temperament: '',
        origin: '',
        country_codes: '',
        country_code: '',
        description: '',
        life_span: '',
        indoor: 0,
        adaptability: 0,
        affection_level: 0,
        child_friendly: 0,
        dog_friendly: 0,
        energy_level: 0,
        grooming: 0,
        health_issues: 0,
        intelligence: 0,
        shedding_level: 0,
        social_needs: 0,
        stranger_friendly: 0,
        vocalisation: 0,
        experimental: 0,
        hairless: 0,
        natural: 0,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        hypoallergenic: 0,
        image: { 
            url: 'estaeslaurl.co/image.jpg', 
            id: '',
            width: 0,
            height: 0 
        }
    }
]