import * as http from 'http';
import { info } from './Lib/logger';
import { AppInterface } from './ServerInterfaces';

class Server {
  private http: http.Server;

  constructor(app: AppInterface) {
    this.http = http.createServer(app.express());
  }
  listen(port: number = 3000, address?: string) {
    this.http.listen(port, address, () => {
      const _port = this.http.address().port;
      const _address = this.http.address().address;
      info(`Server is running http://${_address}:${_port}/`);
    });
  }
}

export default Server;