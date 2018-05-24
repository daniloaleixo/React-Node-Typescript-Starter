// import { Config } from '../../config/config';
import { LogStream } from './log-stream';
import { LOG_HEADERS } from './logger.constant';


/**
 * Facade to a logger service
 * The service save the logs inside the logfile provided in 'config'
 */
export class LoggerService {

	private static generalLog: LogStream;

	public static initLogger() {
  	LoggerService.generalLog = new LogStream('LTF', 'general.log');
	}

	public static info(format: LOG_HEADERS, ...params: any[]) {
  	LoggerService.generalLog.info(format, params);
	}

  public static error(format: LOG_HEADERS, ...params: any[]) {
    LoggerService.generalLog.error(format, params);
  }
}
