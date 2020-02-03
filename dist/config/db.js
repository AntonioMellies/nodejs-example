"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DataBase {
    constructor() {
        this.DB_URL = "mongodb://mongodb-service/db_portal";
    }
    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = DataBase;
