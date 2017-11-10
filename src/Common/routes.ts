import * as React from 'react';
import { RouteProps } from 'react-router';
import Test from './Components/Test';
import Error from './Components/Error';


const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Test
  },
  {
    path: '/notfound',
    component: Error
  }
];

export default routes;