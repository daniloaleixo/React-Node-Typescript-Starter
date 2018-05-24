import { ERROR_CODES, ERROR_MESSAGES } from '../constants/barrel-constants';
import { TerrorCodes, TerrorMessages } from '../types/barrel-types';
import { IGeneralError, IHashSet } from '../interfaces/barrel-interfaces';

/**
 * Given a error code we return the respective error message
 * @param  {TerrorCodes}    name [description]
 * @return {TerrorMessages}      [description]
 */
export function getErrorMessageByCode(name: TerrorCodes): TerrorMessages {
	const errorMessagesAsHash = <IHashSet<TerrorMessages>>ERROR_MESSAGES;
	return errorMessagesAsHash[name];
}

/**
 * Throw LTFError
 * @export
 * @param {TerrorCodes} name
 * @param {Error} [error]
 * @param {*} [errorPayload]
 * @returns {IGeneralError}
 */
export function throwNewGeneralError(name: TerrorCodes, error?: Error, errorPayload?: any): IGeneralError {
	const message = getErrorMessageByCode(name);

	throw {
		...error,
		name: name,
		message: message,
		errorPayload
	};
}

/**
 * Generate an error with internalError Code too
 * @export
 * @param {TerrorCodes} name
 * @param {TerrorCodes} internalName
 * @param {Error} [error]
 * @param {*} [errorPayload]
 * @param {string[]} [errorMessages=[]]
 * @returns {IGeneralError}
 */
export function throwNewInternalGeneralError(name: TerrorCodes, internalName: TerrorCodes, error?: Error, errorPayload?: any, ...errorMessages: string[]): IGeneralError {
	const internalMessage: string = errorMessages ?
		getErrorMessageByCode(internalName).concat(' - MESSAGE: ', ...errorMessages) :
		getErrorMessageByCode(internalName);
	throw {
		...error,
		name,
		message: getErrorMessageByCode(name),
		internalErrorCode: internalName,
		internalErrorMessage: internalMessage,
		errorPayload
	};
}

/**
 * Propagate error
 * @export
 * @param {TerrorCodes} name
 * @param {TerrorCodes} internalName
 * @param {Error} error
 * @returns {IGeneralError}
 */
export function propagateError(name: TerrorCodes, internalName: TerrorCodes, error: Error): IGeneralError {
	throw {
		...error,
		name,
		message: getErrorMessageByCode(name),
		internalErrorCode: internalName,
		internalErrorMessage: getErrorMessageByCode(internalName),
	};
}

/**
 * Get a new object error
 * @export
 * @param {TerrorCodes} internalErrorCode
 * @returns {IGeneralError}
 */
export function getNewInternalGeneralError(internalErrorCode: TerrorCodes): IGeneralError {
	return {
		name: ERROR_CODES.INTERNAL_01_internalError,
		message: ERROR_MESSAGES.INTERNAL_01_internalError,
		internalErrorCode: internalErrorCode,
		internalErrorMessage: getErrorMessageByCode(internalErrorCode),
	};
}

/**
 * Check if the error is an LTFError, if not we construct a internal error
 * @export
 * @param {*} err
 * @returns ILTFError
 */
export function createNewGeneralError(err: any): IGeneralError {
	let error: IGeneralError = err;

	// Check if we have an LTFError
	// If not we have to send internal error
	if (!err.name)
		error = {
			...error,
			...getNewInternalGeneralError(ERROR_CODES.INTERNAL_ERROR_01_unknownError)
		};
	return error;
}



/**
 * Passing an error we can get the HTTP status code
 * @param  {IGeneralError} err [description]
 * @return {number}        [description]
 */
export function getHttpStatus(err: IGeneralError): number {
	switch (err.name) {
		case ERROR_CODES.INTERNAL_01_internalError:
			return 500;
		default:
			return 400;
	}
}



