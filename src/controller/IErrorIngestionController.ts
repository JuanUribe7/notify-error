import { APIResponse } from "../core/common/types";
import { Response } from 'express'; 
import { TypedRequestBody } from '../types/TypedRequestBody';
import { ErrorEvent } from '../domain/models/ErrorEvent';

export interface IErrorIngestionController {
      handleErrorIngestion(req: TypedRequestBody<ErrorEvent | any>, res: Response): Promise<APIResponse>;
}