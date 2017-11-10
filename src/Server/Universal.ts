import * as express from 'express';
import { AppInterface, BootOptionsInterface } from './ServerInterfaces';
import { configureRender } from './Lib/configureRederer';
import { configureMiddlewares } from './Lib/configureMiddlewares';
import Server from './Server';

export default class Universal implements AppInterface {
  private app: express.Application;

  constructor (options: BootOptionsInterface) {
    this.app = configureRender(
      configureMiddlewares(options)
    ).app;
  }
  public express () {
    return this.app;
  }
  
  public static boot (options: BootOptionsInterface) {
   const app = new Universal(options);
   return new Server(app);
  }
}