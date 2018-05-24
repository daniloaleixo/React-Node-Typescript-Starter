import { IRequest } from '../interfaces/barrel-interfaces';

export function turnJSONRequestIntoURLParameters(req: IRequest): string {
	const urlParams: string =
	Object.keys(req)
	.map((k: string) => encodeURIComponent(k) + '=' + encodeURIComponent(req[k]))
	.join('&');

	return '?' + urlParams;
}
