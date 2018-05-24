import { TerrorCodes, TerrorMessages } from '../types/barrel-types';

export interface IGeneralError extends Error {
	name: TerrorCodes;
	message: TerrorMessages;
	internalErrorCode?: TerrorCodes;
	internalErrorMessage?: TerrorMessages;
	errorPayload?: any;
}
