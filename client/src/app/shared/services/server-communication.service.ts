import { IRequest, IResponse, IGeneralError } from '../../../../../core/interfaces/barrel-interfaces';
import { throwNewGeneralError, turnJSONRequestIntoURLParameters } from '../../../../../core/helpers/barrel-helpers';
import { ERROR_CODES, ERROR_MESSAGES } from '../../../../../core/constants/barrel-constants';
import Axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';


// Endpoint route definition
export const endpoint = process.env.ENV == 'prod' ? '/' : 'http://localhost:3000/';
export const APIEndpoint = endpoint + 'api/';

export class ServerCommunicationService {

	private static headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
	};

	public static createAxiosInstance(): AxiosInstance {
		return Axios.create({
			baseURL: APIEndpoint,
			headers: ServerCommunicationService.headers,
			withCredentials: true
		});
	}


	/**
	 * Post request
	 * @param  {string}             relativeURL [description]
	 * @param  {IRequest}           req         [description]
	 * @return {Promise<IResponse>}             [description]
	 */
	public static postRequest(relativeURL: string, payload: IRequest): Promise<IResponse> {
		return new Promise<IResponse>((resolve, reject) => {
			ServerCommunicationService.createAxiosInstance()
			.post(`${relativeURL}`, JSON.stringify(payload))
			.then((res: AxiosResponse<IResponse>) => resolve(res.data))
			.catch((err: AxiosError) => {
				if (err.response) reject(err.response.data);
				else {
					const error: IGeneralError = {
						name: ERROR_CODES.INTERNAL_CLIENT_errorInServerResponse,
						message: ERROR_MESSAGES.INTERNAL_CLIENT_errorInServerResponse
					};
					reject(error);
				}
			});
		});
	}

	/**
	 * Get request
	 * @param  {string}             relativeURL [description]
	 * @return {Promise<IResponse>}             [description]
	 */
	public static getRequest(relativeURL: string, payload?: IRequest): Promise<IResponse> {
		const urlParams: string = payload ? turnJSONRequestIntoURLParameters(payload) : '';

		return new Promise<IResponse>((resolve, reject) => {
			ServerCommunicationService.createAxiosInstance()
			.get(`${relativeURL}${urlParams}`)
			.then((res: AxiosResponse<IResponse>) => resolve(res.data))
			.catch((err: AxiosError) => {
				if (err.response) reject(err.response.data);
				else {
					const error: IGeneralError = {
						name: ERROR_CODES.INTERNAL_CLIENT_errorInServerResponse,
						message: ERROR_MESSAGES.INTERNAL_CLIENT_errorInServerResponse
					};
					reject(error);
				}
			});
		});
	}

}
