import { Route, Switch, RouteProps } from 'react-router';
import * as React from 'react';

interface AppProps {
  routes: RouteProps[];
}
export default class App extends React.Component<AppProps> {
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <Switch>
          {this.props.routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}