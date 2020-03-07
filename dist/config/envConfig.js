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
exports.DB_HOST = process.env.DB_HOST || 'mongodb://mongodb-service/db_portal';
exports.API_PORT = process.env.API_PORT || 80;
exports.JWT_SECRET = process.env.JWT_SECRET || 'secret';
exports.UPLOADS_FOLDER_PATH = process.env.UPLOADS_FOLDER_PATH || 'uploads/';
