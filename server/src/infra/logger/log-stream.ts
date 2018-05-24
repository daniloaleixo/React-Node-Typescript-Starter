
import * as winston from 'winston';


/**
 * Class to describe each log file in the system
 */
export class LogStream {

  constructor(private name: string, private filename: string) {
    winston.configure({
    	transports: [
        // Logs both in the console and in the file
        new winston.transports.File({ filename }),
    		new winston.transports.Console()
    	]
    });
  }

  private generalLog(type: string, format: string, ...params: any[]) {
  	const logText: string = format + ': ' + params.map(param => JSON.stringify(params)).join('');
    // If we do not have a file we ignore log (for dev purposes)
    // if (Config.logs.turnOn) {
  	  winston.log.apply(this, [type, this.name].concat(logText));
    // }
  }

  public debug(format: string, ...params: any[]) {
  	this.generalLog('debug', format, params);
  }

  public info(format: string, ...params: any[]) {
  	this.generalLog('info', format, params);
  }

  public warn(format: string, ...params: any[]) {
  	this.generalLog('warn', format, params);
  }

  public error(format: string, ...params: any[]) {
  	this.generalLog('error', format, params);
  }
}
