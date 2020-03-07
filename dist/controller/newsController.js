"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const newsService_1 = require("../services/newsService");
const utilsController_1 = require("../utils/utilsController");
const HttpStatus = require("http-status");
const redis = require("redis");
class NewsController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let clientRedis = redis.createClient();
            yield clientRedis.get('news', function (err, reply) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        if (reply) {
                            utilsController_1.default.sendResponse(res, HttpStatus.OK, JSON.parse(reply));
                        }
                        else {
                            let response = yield newsService_1.default.get();
                            clientRedis.set('news', JSON.stringify(response));
                            clientRedis.expire('news', 20);
                            utilsController_1.default.sendResponse(res, HttpStatus.OK, response);
                        }
                    }
                    catch (error) {
                        console.error.bind(console, `Error ${error}`);
                    }
                });
            });
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                let response = yield newsService_1.default.getById(_id);
                utilsController_1.default.sendResponse(res, HttpStatus.OK, response);
            }
            catch (error) {
                console.error.bind(console, `Error ${error}`);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let vm = req.body;
                yield newsService_1.default.create(vm);
                utilsController_1.default.sendResponse(res, HttpStatus.CREATED, "Noticia cadastrada com suscesso");
            }
            catch (error) {
                console.error.bind(console, `Error ${error}`);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                let vm = req.body;
                yield newsService_1.default.update(_id, vm);
                utilsController_1.default.sendResponse(res, HttpStatus.OK, "Noticia atualizada com suscesso");
            }
            catch (error) {
                console.error.bind(console, `Error ${error}`);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                yield newsService_1.default.delete(_id);
                utilsController_1.default.sendResponse(res, HttpStatus.OK, "Noticia excluida com suscesso");
            }
            catch (error) {
                console.error.bind(console, `Error ${error}`);
            }
        });
    }
}
exports.default = new NewsController();
