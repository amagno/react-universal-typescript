import 'jest';
import * as supertest from 'supertest';
import App from '../App';
import * as express from 'express';
import { Routes, resolve } from 'universal-router';
const UniversalRouter = require('universal-router');



describe('test app is running', () => {
  it('it run app with routes', async () => {
    const routes: express.Application = express();
    routes.get('/', (req, res) => res.send('hello world!'));
    const app = new App(routes);
    const req = await supertest(app.express()).get('/');
    expect(req.text).toMatchSnapshot();
  });
  it('resolve router', async () => {
    const universalRoutes: Routes<{}, string> = [
      {
        path: '/',
        action: () => 'hello world!'
      }
    ];
    
    const router = new UniversalRouter(universalRoutes);
    const data = await router.resolve({ pathname: '/'});
    console.log(data);
    
    expect(data).toEqual('hello world!');
  });
});