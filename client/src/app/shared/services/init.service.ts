import { IResponse } from '../../../../../core/interfaces/barrel-interfaces';
import { requestsInfo } from '../../../../../core/constants/barrel-constants';

import { ServerCommunicationService } from './server-communication.service';

import store from '../../store';

export class InitService {

	/**
	 * Single init request
	 * @return {Promise<IInitResponse>} [description]
	 */
	public static initApp(): Promise<IResponse> {
		return new Promise((resolve, reject) => {
			ServerCommunicationService.getRequest(requestsInfo.init.path)
			.then((res: IResponse) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
		});
	}
}
