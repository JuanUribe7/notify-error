import {APIResponse} from "./types";

export class ResponseWriter {

    public static objectResponse(statusCode: number, body: any): APIResponse {
        const response = {
            statusCode,
        } as APIResponse;
        response.body = JSON.stringify(body);
        return response;
    }
}