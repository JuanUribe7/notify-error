import { APIResponse } from "../core/common/types";

export interface IBreedController {
    getBreeds(): Promise<APIResponse>;
}