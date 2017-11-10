import { AppMiddlewareInterface } from '../ServerInterfaces';
import { staticPublicMiddleware } from '../Middlewares/staticPublicMiddleware';
import { compilerDevMiddleware } from '../Middlewares/compilerDevMiddleware';
import * as path from 'path';


const middlewares: AppMiddlewareInterface[] = [
  {
    path: '/public',
    use: staticPublicMiddleware
  },
  {
    use: compilerDevMiddleware,
    dev: true
  },
  {
    path: '/auth',
    use: (req, res, next) => {
      res.redirect('/notfound');
    }
  }
];



export default middlewares;