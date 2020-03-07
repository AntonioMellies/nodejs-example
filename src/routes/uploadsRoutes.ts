import * as express from "express";
import UploadsController from '../controller/uploadsController';

let routes = express.Router(); 
routes.post('/', UploadsController.receiveFile);

export default routes;