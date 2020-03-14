import * as dotenv from 'dotenv';

let path;

switch (process.env.NODE_ENV) {
  case "development":
    path = `${__dirname}/../../.env.development`;
    break;
  default:
    path = `${__dirname}/../../.env`;
}

dotenv.config({ path: path });


export const NODE_ENV = process.env.NODE_ENV || 'Não definido';
export const DB_URI = process.env.DB_URI || 'mongodb://mongodb-service/db_portal';
export const API_PORT = Number(process.env.API_PORT) || 3050 ;
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
export const UPLOADS_FOLDER_PATH = process.env.UPLOADS_FOLDER_PATH || 'uploads/';
export const EXPORTS_FOLDER_PATH = process.env.EXPORTS_FOLDER_PATH || 'exports/';
export const REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;
export const REDIS_SERVICE = process.env.REDIS_SERVICE || 'redis-service';
