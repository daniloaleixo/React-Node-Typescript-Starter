import { Response, Request, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import { getErrorMessageByCode } from '../../../core/helpers/barrel-helpers';
import { ERROR_CODES } from '../../../core/constants/barrel-constants';
import * as cookie from 'cookie';

/**
 * Allow CORS
 * @param {Request}
 * @param {Response}
 * @param {NextFunction}
 */
export function cors(req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH,DELETE");
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

