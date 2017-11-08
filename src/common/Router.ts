import { Routes, resolve } from 'universal-router';
import { RouteParamsInterface } from './CommonInterfaces';
import * as React from 'react';

const UniversalRouter = require('universal-router');

export default class Router {
  private routes: Routes<RouteParamsInterface, React.ReactElement<{}>>;

  constructor(routes: Routes<RouteParamsInterface, React.ReactElement<{}>> = []) {
    this.routes = routes;
  }
  public add(path: string, component: React.ComponentClass | React.StatelessComponent): Router {
    this.routes.push({
      path,
      action: ({ pathname, params, context }) => {
        const props_chunck: RouteParamsInterface = {
          pathname,
          params: params || {},
          context: context || {}

        };
        return React.createElement(component, <React.Attributes>{...props_chunck});
      }
    });
    return this;
  }
  public async resolve<Props>(resolveParams: RouteParamsInterface<Props>) {
    try {
      const router = new UniversalRouter(this.routes);
      return await router.resolve(resolveParams);
    } catch (error) {
      throw new Error(error);
    }
  }
}