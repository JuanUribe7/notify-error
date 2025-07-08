
import { ErrorEvent } from './models/ErrorEvent';

export interface ErrorParserPort {
    parse(rawErrorData: any): ErrorEvent;
}