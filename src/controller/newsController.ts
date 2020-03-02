import NewsService from '../services/newsService';
import UtilsController from '../utils/utilsController';
import * as HttpStatus from 'http-status';

class NewsController {
    get(req,res){
        NewsService.get()
        .then(news => UtilsController.sendResponse(res,HttpStatus.OK,news))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    getById(req,res){
        const _id = req.params.id;
        NewsService.getById(_id)
        .then(news => UtilsController.sendResponse(res,HttpStatus.OK,news))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    create(req,res){
        let vm = req.body;
        NewsService.create(vm)
        .then(news => UtilsController.sendResponse(res,HttpStatus.CREATED,"Noticia cadastrada com suscesso"))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    update(req,res){
        const _id = req.params.id;
        let vm = req.body;
        NewsService.update(_id,vm)
        .then(news => UtilsController.sendResponse(res,HttpStatus.OK,"Noticia atualizada com suscesso"))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    delete(req,res){
        const _id = req.params.id;
        NewsService.delete(_id)
        .then(news => UtilsController.sendResponse(res,HttpStatus.OK,"Noticia excluida com suscesso"))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }
}

export default new NewsController();