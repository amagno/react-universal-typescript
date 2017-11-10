import { StaticRouter, RouteProps } from 'react-router';
import * as React from 'react';
import App from '../../common/Components/App';
import { renderToString } from 'react-dom/server';
import { makeDocument } from './document';
import * as express from 'express';
import { BootOptionsInterface } from '../ServerInterfaces';

interface HandlerRouteInterface {
  location: string;
  context: {};
  routes: RouteProps[];
}

const render  = (options: HandlerRouteInterface): string => {
  const component = (
    <StaticRouter location={options.location} context={options.context}>
      <App routes={options.routes}/>
    </StaticRouter>
  );
  const data = renderToString(component);
  return makeDocument(data);
};

export const configureRender = (options: BootOptionsInterface, context: any = {}, path: string = '*'): BootOptionsInterface => {
  options.app.get(path, (req, res) => {
    return res.send(render({
      location: req.url,
      context,
      routes: options.routes
    }));
  });
  return options;
};