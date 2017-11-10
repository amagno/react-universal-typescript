import Universal from '../Universal';
import routes from '../../common/routes';
import * as express from 'express';
import middlewares from './middlewares';

Universal
  .boot({
    isDev: true,
    app: express(),
    routes,
    middlewares
  })
  .listen(3000);