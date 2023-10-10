import "reflect-metadata";
import { expect, describe, it } from '@jest/globals';
import { BreedsBL } from '../../domain/BreedsBL';
import { mockRepositoryResponse, mockBreedsEmpty, mockBreeds } from '../mocks/blmocks/mock-breedsbl' 

describe('Test BL for Cat Breeds', function () {

    it('check if exists class', async () => {
        var result = new BreedsBL(mockRepositoryResponse);
        expect(result instanceof BreedsBL).toBeTruthy();
    });

    it('check if exist the method getBreeds', async () => {
        mockRepositoryResponse.getCatBreeds.mockResolvedValueOnce(mockBreedsEmpty);
        var result = new BreedsBL(mockRepositoryResponse);
        var breeds = await result.getBreeds();
        expect(breeds).toBeDefined();
    });

    it('check if the method getBreeds return an empty array', async () => {
        mockRepositoryResponse.getCatBreeds.mockResolvedValueOnce(mockBreedsEmpty);
        var result = new BreedsBL(mockRepositoryResponse);
        var breeds = await result.getBreeds();
        expect(breeds.length).toBe(0);
    });

    it('check if the method getBreeds return an filled array', async () => {  
        mockRepositoryResponse.getCatBreeds.mockResolvedValueOnce(mockBreeds); 
        var result = new BreedsBL(mockRepositoryResponse);
        var breeds = await result.getBreeds();
        expect(breeds.length).toBe(2);
    });

});


