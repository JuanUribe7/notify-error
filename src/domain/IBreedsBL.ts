export interface IBreedsBL {

    getBreeds(): Promise<BreedDomain[]>;
    
}