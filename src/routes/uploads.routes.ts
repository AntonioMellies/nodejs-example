import * as express from "express";
import UploadsController from '../controllers/uploads.controller';

let routes = express.Router(); 
routes.post('/', UploadsController.receiveFile);

export default routes;