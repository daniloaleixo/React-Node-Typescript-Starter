import * as fs from 'fs';
import * as SocketIO from 'socket.io';
import { config } from 'aws-sdk';
import { ExpressApp } from "./app";
import { Express } from 'express';
import { createServer, Server, ServerOptions } from 'https';
import * as http from 'http';


import { LoggerService } from '../infra/logger/logger.service';

/**
 * The function first initialize everything that the express app needs to run,
 * then it initializes the express app and finally it puts the express to listen to requests
 */
export const initServer = async function () {

	// Load AWS Credentials
	// TODO ver se precisamos ainda disso
	// config.update(Config.AWSCredentials);

	// Init loggers
	LoggerService.initLogger();

	// Init Dynamo
	// await DynamoDB.initDynamo();


	const app: Express = ExpressApp.initExpress();

	// TODO gambiarra pro heroku funcionar --'
	const server: http.Server = http.createServer(app);

	// TODO If heroku we must not open 2 ports at the same time
	// if (process.env.ENV != 'stagging') {


	// Redirect HTTP to HTTPS
	// http.createServer((req, res) => {
	// 	res.writeHead(301, {
	// 		"Location": "https://" + req.headers['host'] + req.url
	// 	});
	// 	res.end();
	// }).listen(app.get("HTTPport"), () => {
	// 	console.log("  App is running at http://localhost:%d in %s mode and will redirect to HTTPS",
	// 		app.get("HTTPport"),
	// 		app.get("env"));
	// });

	// }

	// Set listen to HTTPS
	server.listen(app.get("HTTPport"), () => {
		console.log("  App is running at http://localhost:%d in %s mode",
			app.get("HTTPport"),
			app.get("env"));

		console.log("  Press CTRL-C to stop\n");
	});

	// // Set listen to HTTPS
	// server.listen(app.get("HTTPSport"), () => {
	// 	console.log("  App is running at https://localhost:%d in %s mode",
	// 		app.get("HTTPSport"),
	// 		app.get("env"));

	// 	console.log("  Press CTRL-C to stop\n");
	// });
};
