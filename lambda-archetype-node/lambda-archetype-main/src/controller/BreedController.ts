import { ResponseWriter } from "../core/common/ResponseWriter";
import { APIResponse } from "../core/common/types";
import { IBreedsBL } from "../domain/IBreedsBL";
import { IBreedController } from "./IBreedController";

export class BreeedController implements IBreedController {
    constructor(private breedBL : IBreedsBL){ }

    async getBreeds() : Promise<APIResponse> {
        try {
            const breeds = await this.breedBL.getBreeds();
            return ResponseWriter.objectResponse(200, breeds);
        } catch (e) {
            return ResponseWriter.objectResponse(500, e);
        }
    }

}