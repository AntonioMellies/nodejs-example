"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const EnvConfig = require("./envConfig");
class DataBase {
    createConnection() {
        console.log(`createConnection DB_HOST: ${EnvConfig.DB_HOST}`);
        mongoose.connect(EnvConfig.DB_HOST);
    }
}
exports.default = DataBase;
