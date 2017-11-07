"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const Logger_1 = require("../utils/Logger");
class Server {
    constructor(app, options) {
        this.http = http.createServer(app);
    }
    listen(port = 3000, address) {
        this.http.listen(port, address, () => {
            const _port = this.http.address().port;
            const _address = this.http.address().address;
            Logger_1.ConsoleLogger.info(`Server is running http://${_address}:${_port}/`);
        });
    }
}
exports.default = Server;
