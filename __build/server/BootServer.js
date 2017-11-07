"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server");
const App_1 = require("./App");
const express = require("express");
function default_1(port) {
    const app = new App_1.default(express());
    const server = new Server_1.default(app.express());
    server.listen(port);
    return app.express();
}
exports.default = default_1;
