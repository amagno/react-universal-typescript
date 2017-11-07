import * as express from 'express';
import * as http from 'http';
import { ConsoleLogger } from '../utils/Logger';

class Server {
  private http: http.Server;

  constructor(app: express.Application, options?: object) {
    this.http = http.createServer(app);
  }
  listen(port: number = 3000, address?: string) {
    this.http.listen(port, address, () => {
      const _port = this.http.address().port;
      const _address = this.http.address().address;
      ConsoleLogger.info(`Server is running http://${_address}:${_port}/`);
    });
  }
}

export default Server;