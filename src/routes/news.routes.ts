import * as express from "express";
import NewsController from '../controllers/news.controller';

let routes = express.Router(); 
routes.post('/', NewsController.create);
routes.get('/', NewsController.get);
routes.get('/:id', NewsController.getById);
routes.put('/:id', NewsController.update);
routes.delete('/:id',NewsController.delete);

export default routes;