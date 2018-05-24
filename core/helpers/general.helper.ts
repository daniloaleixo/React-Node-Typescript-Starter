import * as uuid from 'uuid';
import { IHashSet, IGeneralObject } from '../interfaces/barrel-interfaces';
import { throwNewGeneralError } from './error.helper';
import { ERROR_CODES } from '../constants/error.constant';
import { TGeneralID } from '../types/barrel-types';

export function fromHashToArray<T>(hash: IHashSet<T>): Array<T> {
	return Object.keys(hash).map((key: string) => hash[key]);
}

export function fromArrayToHash(array: IGeneralObject[]): IHashSet<IGeneralObject> {
	const hash: IHashSet<IGeneralObject> = {};
	array.map((el: IGeneralObject) => hash[el.primaryID] = el);
	return hash;
}

export function generatePrimaryID(): string {
	return uuid.v1();
}


/**
 * Get all the keys that intersect between two objects
 * @export
 * @param {*} o1
 * @param {*} o2
 * @returns
 */
export function intersectionOfTwoObjects(o1: any, o2: any) {
    return Object.keys(o1).filter({}.hasOwnProperty.bind(o2));
}

/**
 * Get all the keys that difference between two objects
 * @export
 * @param {*} o1
 * @param {*} o2
 * @returns
 */
export function differenceOfTwoObjects(o1: any, o2: any) {
	return Object.keys(o2).reduce((diff, key) => {
		if (o1[key] === o2[key]) return diff;
		return {
			...diff,
			[key]: o2[key]
		};
	}, {});
}

/**
 * Date transformations
 */
export function ISOStringToDate (iso: string) {
	return new Date(iso);
}

export function dateToISOString (date) {
	return date.toISOString();
}

/**
 * Merge two arrays and clean the undefined items
 * @export
 * @param {any} arrayOfArrays
 * @returns
 */
export function mergeArrays(...arrayOfArrays: any[]): any[] {
	let x = [];
	arrayOfArrays = arrayOfArrays.filter((array: any[]) => array);
	arrayOfArrays.map((array: any[]) => x = [...x, ...array]);
	return x.filter((item: any) => item);
}


/**
 * Verify if one of the variables exists and return the one that exists,
 * if both exists, return the first one
 * @export
 * @param {*} x
 * @param {*} y
 * @returns {*}
 */
export function getOneOfThem(x: any, y: any): any {
	if (x != null && y != null) return x;
	if (x != null) return x;
	if (y != null) return y;
	return x;
}
