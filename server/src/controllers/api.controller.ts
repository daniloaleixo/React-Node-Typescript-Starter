"use strict";

import * as async from "async";
import * as request from "request";
import * as graph from "fbgraph";
import * as express from "express";
import * as path from 'path';

import { IResponse, IGeneralError, IRequest } from '../../../core/interfaces/barrel-interfaces';
import { REQUEST_TYPES, RESPONSE_FILE_TYPE } from '../../../core/constants/barrel-constants';
import { ERROR_CODES } from '../../../core/constants/barrel-constants';
import { createNewGeneralError, throwNewInternalGeneralError, getHttpStatus, getNewInternalGeneralError } from '../../../core/helpers/barrel-helpers';

import { LoggerService, LOG_HEADERS } from '../infra/logger/';

import { InitController } from './init.controller';


/**
 * Handles all requests (it's our entrypoint)
 */
export class ApiController {

  /**
   * Will be the single entry and out point for the entire API
   * @param {Request}
   * @param {Response}
   */
  public static async entryPoint(req: express.Request, res: express.Response, requestType: REQUEST_TYPES): Promise<void> {
    let response: IResponse = undefined;

    // Log request
    LoggerService.info(LOG_HEADERS.COMM, 'REQUEST', { method: req.method, path: req.path, protocol: req.protocol, body: req.body });


    try {

      // Routes the request to specific controller
      switch (requestType) {
        /**
         * ******************************************
         *               INIT Requests
         * ******************************************
         */
        case REQUEST_TYPES.init:
          response = await InitController.init(req);
          break;

        default:
          LoggerService.error(LOG_HEADERS.ERR, 'ERR', ERROR_CODES.INTERNAL_COMM_01_doesNotExistThisRequestType, response);
          throwNewInternalGeneralError(ERROR_CODES.INTERNAL_01_internalError,
            ERROR_CODES.INTERNAL_COMM_01_doesNotExistThisRequestType);
      }

      LoggerService.info(LOG_HEADERS.COMM, 'RESPONSE', response);

      // Choose how to respond the request
      // In case we have to send other type of files
      switch (response.responseFileType) {
        // JSON based response
        case RESPONSE_FILE_TYPE.JSON:
          res.send(response);
          break;

        default:
          res.send(response);
          break;
      }
    } catch (err) {
      const LTFError: IGeneralError = createNewGeneralError(err);

      LoggerService.error(LOG_HEADERS.GENERAL, LTFError.internalErrorMessage ? LTFError.internalErrorMessage : LTFError.message);

      // Get the properly HTTP status and send the error object
      res.status(getHttpStatus(err)).send(err);
    }

  }

}
