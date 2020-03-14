import * as express from "express";
import NewsController from '../controllers/news.controller';

let routes = express.Router(); 

routes.post('/', NewsController.create);
routes.get('/', NewsController.get);
routes.get('/:id', NewsController.getById);
routes.get('/search/:key', NewsController.search);
routes.put('/:id', NewsController.update);
routes.delete('/:id',NewsController.delete);
routes.get('/export/csv', NewsController.exportToCsv);

export default routes;