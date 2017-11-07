"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MakeDocument_1 = require("./Lib/MakeDocument");
const handleRender = (req, res) => {
    res.send(MakeDocument_1.default('Hello World'));
};
const configureRender = (app, path = '*') => {
    return app.get(path, handleRender);
};
class App {
    constructor(app, options) {
        this.app = configureRender(app);
    }
    express() {
        return this.app;
    }
}
exports.default = App;
