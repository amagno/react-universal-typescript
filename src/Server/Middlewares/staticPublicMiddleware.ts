import * as express from 'express';
import * as path from 'path';

export const staticPublicMiddleware: express.Handler = express.static(path.resolve('public'));


