import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as session from "express-session";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as lusca from "lusca";
import * as flash from "express-flash";
// import * as path from "path";
import * as expressValidator from "express-validator";
import * as errorHandler from "errorhandler";
import * as cookieParser from "cookie-parser";

import { cors } from "./middlewares";
import { Routes } from './routes';

import { throwNewGeneralError } from '../../../core/helpers/barrel-helpers';
import { ERROR_CODES } from '../../../core/constants/barrel-constants';

const clientFolder: string = __dirname + '/../../../client/';


/**
 * Class that creates an Express app, and add configuration and routes to it
 * @export
 * @class ExpressApp
 */
export class ExpressApp {

  public app: express.Express;
  public static expressInstance: ExpressApp = undefined;

  public static initExpress(): express.Express {
    ExpressApp.expressInstance = new ExpressApp();
    return ExpressApp.expressInstance.app;
  }

  constructor() {
    if (ExpressApp.expressInstance)
      throwNewGeneralError(ERROR_CODES.SYSTEM_01_attemptToCreateMoreThanOneInstance);

    // Create express app
    this.app = express();

    // Include configuration
    this.config();

    // Configure routes
    Routes.routesConfig(this.app);
  }

  /**
   * Express configuration
   * @private
   * @memberof ExpressApp
   */
  private config() {
    this.app.set("HTTPport", process.env.PORT ? '27500' : process.env.ENV == 'prod' ? 80 : 3000);
    this.app.set("HTTPSport", process.env.PORT ? process.env.PORT : process.env.ENV == 'prod' ? 443 : 3443);
    this.app.set("env", process.env.ENV);


    this.app.use(compression());
    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(expressValidator());

    // Serve React files
    this.app.use(express.static(clientFolder));


    this.app.use(flash());
    this.app.use(lusca.xframe("SAMEORIGIN"));
    this.app.use(lusca.xssProtection(true));
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.locals.user = req.user;
      next();
    });

    // Allow Cors
    this.app.use(cors);

    // Error Handler. Provides full stack - remove for production
    this.app.use(errorHandler());

    this.app.use(cookieParser()); // read cookies (needed for auth)
  }
}
