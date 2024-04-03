import { ExceptionDescription } from "aws-sdk/clients/dynamodb";
import { ResponseWriter } from "../core/common/ResponseWriter";
import { APIResponse } from "../core/common/types";
import { HttpStatus } from "../core/utils/Constants";
import { IBreedsBL } from "../domain/IBreedsBL";
import { IBreedController } from "./IBreedController";

export class BreeedController implements IBreedController {
    constructor(private breedBL : IBreedsBL){ }

    async getBreeds() : Promise<APIResponse> {
        try {
            const breeds = await this.breedBL.getBreeds();
            console.log(breeds);
            return ResponseWriter.objectResponse(HttpStatus.OK, breeds);
        } catch ( e : ExceptionDescription | Error | any | unknown) {
            return ResponseWriter.objectResponse(HttpStatus.INTERNAL_SERVER_ERROR, e.message);
        }
    }

}