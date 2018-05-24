
/**
 * Server bootstrap
 * initServer will initilize the server and everything that it needs to run
 */


import { initServer } from "../config/server";

// Check if prod or dev
if (!process.env.ENV) process.env.ENV = 'dev';

// Init Server
initServer();


