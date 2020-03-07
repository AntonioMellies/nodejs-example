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
export const DB_HOST = process.env.DB_HOST || 'mongodb://mongodb-service/db_portal';
export const API_PORT = process.env.API_PORT || 80 ;
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
