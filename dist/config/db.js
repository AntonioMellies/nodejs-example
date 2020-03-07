"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const EnvConfig = require("./envConfig");
class DataBase {
    createConnection() {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };
        mongoose.connect(EnvConfig.DB_URI, options)
            .then(conn => console.log(`CreateConnection DB_URI: ${EnvConfig.DB_URI}`))
            .catch(err => console.log(`CreateConnection DB_URI: ${err}`));
    }
}
exports.default = DataBase;
