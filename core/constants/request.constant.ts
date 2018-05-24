import { IHashSet } from '../interfaces/barrel-interfaces';


export enum REQUEST_TYPES {
	init = 'init'
}

export enum SOCKET_REQUEST_TYPES {
	connect = 'connect',
	init = 'init',
	disconnect = 'disconnect',
	reconnect = 'reconnect',
	error = 'error'
}


export const requestsInfo = {
	// Init
	init: {
		path: "init",
		id: REQUEST_TYPES.init
	},
};





// *********************
//

export enum RESPONSE_FILE_TYPE {
	JSON = 'JSON',
	FILE = 'FILE'
}
