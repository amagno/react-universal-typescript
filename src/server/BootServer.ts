import Server from './Server';
import App from './App';
import * as express from 'express';
export default function (port: number): express.Application {
  const app = new App(express());
  const server = new Server(app.express());
  server.listen(port);
  return app.express();
}