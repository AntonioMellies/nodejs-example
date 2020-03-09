"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
let path;
switch (process.env.NODE_ENV) {
    case "development":
        path = `${__dirname}/../../.env.development`;
        break;
    default:
        path = `${__dirname}/../../.env`;
}
dotenv.config({ path: path });
exports.NODE_ENV = process.env.NODE_ENV || 'Não definido';
exports.DB_URI = process.env.DB_URI || 'mongodb://mongodb-service/db_portal';
exports.API_PORT = Number(process.env.API_PORT) || 3050;
exports.JWT_SECRET = process.env.JWT_SECRET || 'secret';
exports.UPLOADS_FOLDER_PATH = process.env.UPLOADS_FOLDER_PATH || 'uploads/';
exports.REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;
exports.REDIS_SERVICE = process.env.REDIS_SERVICE || 'redis-service';
