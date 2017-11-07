"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
class ConsoleLogger {
    static info(message) {
        console.log(`${colors.yellow(`[INFO] | [${ConsoleLogger.now}]`)} : ${colors.green(message)}`);
    }
}
ConsoleLogger.now = new Date().toLocaleString();
exports.ConsoleLogger = ConsoleLogger;
