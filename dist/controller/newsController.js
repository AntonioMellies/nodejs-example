"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService_1 = require("../services/newsService");
const utilsController_1 = require("../utils/utilsController");
const HttpStatus = require("http-status");
class NewsController {
    get(req, res) {
        newsService_1.default.get()
            .then(news => utilsController_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        newsService_1.default.getById(_id)
            .then(news => utilsController_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        newsService_1.default.create(vm)
            .then(news => utilsController_1.default.sendResponse(res, HttpStatus.CREATED, "Noticia cadastrada com suscesso"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let vm = req.body;
        newsService_1.default.update(_id, vm)
            .then(news => utilsController_1.default.sendResponse(res, HttpStatus.OK, "Noticia atualizada com suscesso"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newsService_1.default.delete(_id)
            .then(news => utilsController_1.default.sendResponse(res, HttpStatus.OK, "Noticia excluida com suscesso"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new NewsController();
