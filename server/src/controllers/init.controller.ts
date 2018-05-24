import { Request } from 'express';
import { IResponse } from '../../../core/interfaces/barrel-interfaces';
import { throwNewGeneralError } from '../../../core/helpers/barrel-helpers';
import { ERROR_CODES, RESPONSE_FILE_TYPE } from '../../../core/constants/barrel-constants';

/**
 * Controller that handles the initial request of the client
 */
export class InitController {
	/**
	 * Get all the info necessary to the user to use the client app
	 * @return {Promise<IInitResponse>} [description]
	 */
	public static async init(req: Request): Promise<IResponse> {

		const response: IResponse = {
			responseFileType: RESPONSE_FILE_TYPE.JSON,
		};

		try {

		} catch (err) {
			throwNewGeneralError(ERROR_CODES.AUTH_06_couldNotFindTheUser);
		}

		return response;
	}
}
