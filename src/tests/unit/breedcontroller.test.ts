// import "reflect-metadata";
// import { expect, describe, it } from '@jest/globals';
// import { BreeedController } from '../../controller/BreedController';
// import { mockBLResponse , mockBreedsList} from '../mocks/controllermocks/mock-breedscontroller'

// describe('Test Controller for Cat Breeds', function () {

//     it('check if exists class', async () => {
//         var controller = new BreeedController(mockBLResponse);
//         expect(controller).toBeInstanceOf(BreeedController);
//     });

//     it('check if exists method getBreeds', async () => {
//         mockBLResponse.getBreeds.mockResolvedValueOnce([])
//         var controller = new BreeedController(mockBLResponse);
//         var result = await controller.getBreeds();
//         expect(result).toBeInstanceOf(Object);
//     });

//     it('check if method getBreeds returns a status ok with empty data', async () => {
//         mockBLResponse.getBreeds.mockResolvedValueOnce([])
//         var controller = new BreeedController(mockBLResponse);
//         var result = await controller.getBreeds();
//         expect(result.statusCode).toBe(200);
//     });

//     it('check if method getBreeds returns a empty json body with empty data', async () => {
//         mockBLResponse.getBreeds.mockResolvedValueOnce([])
//         var controller = new BreeedController(mockBLResponse);
//         var result = await controller.getBreeds();
//         expect(result.body).toBe("[]");
//     });

//     it('check if method getBreeds returns a status ok with filled data', async () => {
//         mockBLResponse.getBreeds.mockResolvedValueOnce(mockBreedsList)
//         var controller = new BreeedController(mockBLResponse);
//         var result = await controller.getBreeds();
//         expect(result.statusCode).toBe(200);
//     });

//     it('check if method getBreeds returns a body with data with filled data', async () => {
//         mockBLResponse.getBreeds.mockResolvedValueOnce(mockBreedsList)
//         var controller = new BreeedController(mockBLResponse);
//         var result = await controller.getBreeds();
//         expect(result.body.length > 2).toBeTruthy();
//     });

//     it('check if method getBreeds returns a status 500 with exception', async () => {
//         mockBLResponse.getBreeds.mockRejectedValueOnce(new Error('test'))
//         var controller = new BreeedController(mockBLResponse);
//         var result = await controller.getBreeds();
//         expect(result.statusCode).toBe(500);
//     });
 
// });


