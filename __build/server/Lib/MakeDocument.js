"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
function default_1(body, title) {
    const html = fs.readFileSync(path.resolve('public', 'index.html')).toString();
    return html
        .replace('{{title}}', title)
        .replace('{{body}}', body);
    // .replace('{{client}}', client)
}
exports.default = default_1;
