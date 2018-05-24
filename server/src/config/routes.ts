import { ApiController } from "../controllers/api.controller";
import { requestsInfo } from '../../../core/constants/barrel-constants';
import * as express from "express";
import * as path from 'path';



const serverEndpoint: string = '/';
const apiEndpoint: string = serverEndpoint + 'api/';

export class Routes {

  public static routesConfig(app: express.Express): void {


    // Verify Auth Token JWT
    // app.all('*', verifyJWT);

    app.get('/', (req: any, res: any, next: any) => {
      res.send('respond with a resource.');
    });
    app.post('/', (req: any, res: any, next: any) => {
      res.send('respond with a resource.');
    });

    // Root GET request
    app.get(`${apiEndpoint}`, (req, res) =>
      ApiController.entryPoint(req, res, undefined));

    // Root POST request
    app.post(`${apiEndpoint}`, (req, res) =>
      ApiController.entryPoint(req, res, undefined));


    /**
     * INIT
     */
    app.get(`${apiEndpoint}${requestsInfo.init.path}`, (req, res) =>
      ApiController.entryPoint(req, res, requestsInfo.init.id));


  }
}
