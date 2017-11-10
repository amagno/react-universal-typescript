// import 'jest';
// import * as supertest from 'supertest';
// import UniversalApp from '../UniversalApp';
// import * as React from 'react';
// import * as express from 'express';


// describe('initialize universal app with routes', () => {
//   // test('test simples routes', async () => {
//   //   Router.add('/', () => <h1>Hello World!</h1>);
//   //   const routes = new Router();
//   //   // const app = new UniversalApp(routes, {
//   //   //   expressApp: express()
//   //   // });
    
//   //   const req = await supertest(app.express()).get('/');
//   //   expect(req.text).toMatchSnapshot();
//   // });


//   it('init universal app with routes', () => {
//     const routes = [
//       {
//         path: '/',
//         exact: true,
//         component: () => <h1>Hello World</h1>
//       }
//     ];
//     const app = new UniversalApp({
//       routes
//     });

//   });
// });