import * as express from 'express';
import MakeDocument from './Lib/MakeDocument';
const handleRender = (req: express.Request, res: express.Response) => {
  res.send(MakeDocument('Hello World'));
};
const configureRender = (app: express.Application, path: string = '*'): express.Application => {
  return app.get(path, handleRender);
};
class App {
  private app: express.Application;
  constructor(app: express.Application, options?: object) {
    this.app = configureRender(app);
  }
  express() {
    return this.app;
  }
}
export default App;