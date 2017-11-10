import * as express from 'express';
import { RouteProps } from 'react-router';


export interface AppInterface {
  express(): express.Application;
}
export interface AppMiddlewareInterface {
  path?: string;
  use: express.Handler;
  dev?: boolean;
}
export interface BootOptionsInterface {
  routes: RouteProps[];
  port?: number;
  isDev?: boolean;
  app: express.Application;
  middlewares: AppMiddlewareInterface[];
}


