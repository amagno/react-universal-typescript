import * as colors from 'colors';

export class ConsoleLogger {
  public static now: string = new Date().toLocaleString();
  public static info(message: string) {
    
    console.log(`${colors.yellow(`[INFO] | [${ConsoleLogger.now}]`)} : ${colors.green(message)}`);
  }
}