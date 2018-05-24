import { RESPONSE_FILE_TYPE } from '../constants/barrel-constants';

/**
 * General request interfaces, will be the father of all other interfaces
 */
export interface IRequest {

}

/**
 * General response interfaces, will be the father of all other interfaces
 */
export interface IResponse {
	responseFileType: RESPONSE_FILE_TYPE;
}
