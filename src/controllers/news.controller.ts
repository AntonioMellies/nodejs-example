import * as HttpStatus from 'http-status';
import * as redis from 'redis';

import * as EnvConfig from '../config/envConfig';
import NewsService from '../services/news.service';
import UtilsController from '../utils/utilsController';
import CsvService from '../services/csv.service';
import { link } from 'fs';

class NewsController {

    async search(req, res) {
        try {
            const key = req.params.key;

            const page = req.query.page ? parseInt(req.query.page) : 1;
            const perPage = req.query.limit ? parseInt(req.query.limit) : 10;

            let response = await NewsService.search(key, page, perPage);
            UtilsController.sendResponse(res, HttpStatus.OK, response);

        } catch (error) {
            console.error.bind(console, `Error ${error}`)
        }

    }


    async get(req, res) {
        let clientRedis = redis.createClient(EnvConfig.REDIS_PORT, EnvConfig.REDIS_SERVICE);
        await clientRedis.get('news', async function (err, reply) {
            try {
                if (reply) {
                    UtilsController.sendResponse(res, HttpStatus.OK, JSON.parse(reply));
                } else {
                    let response = await NewsService.get();
                    clientRedis.set('news', JSON.stringify(response));
                    clientRedis.expire('news', 20);
                    UtilsController.sendResponse(res, HttpStatus.OK, response);
                }

            } catch (error) {
                console.error.bind(console, `Error ${error}`)
            }
        });
    }

    async getById(req, res) {
        try {
            const _id = req.params.id;
            let response = await NewsService.getById(_id);
            UtilsController.sendResponse(res, HttpStatus.OK, response);

        } catch (error) {
            console.error.bind(console, `Error ${error}`)
        }

    }

    async create(req, res) {
        try {
            let vm = req.body;
            await NewsService.create(vm);
            UtilsController.sendResponse(res, HttpStatus.CREATED, "Noticia cadastrada com suscesso");

        } catch (error) {
            console.error.bind(console, `Error ${error}`)
        }
    }

    async update(req, res) {
        try {
            const _id = req.params.id;
            let vm = req.body;
            await NewsService.update(_id, vm)
            UtilsController.sendResponse(res, HttpStatus.OK, "Noticia atualizada com suscesso");

        } catch (error) {
            console.error.bind(console, `Error ${error}`)
        }

    }

    async delete(req, res) {
        try {
            const _id = req.params.id;
            await NewsService.delete(_id);
            UtilsController.sendResponse(res, HttpStatus.OK, "Noticia excluida com suscesso");

        } catch (error) {
            console.error.bind(console, `Error ${error}`)

        }
    }

    async exportToCsv(req, res) {
        const fields = ['_id', 'hat', 'title', 'text', 'author', 'img', 'publishDate', 'link', 'active'];
        const options = { fields };
        try {
            let response = await NewsService.get();
            let filename = CsvService.toCSV(response, options);
            UtilsController.sendResponse(res, HttpStatus.OK, req.get('host') + '/' + EnvConfig.EXPORTS_FOLDER_PATH + filename);

        } catch (error) {
            console.error.bind(console, `Error ${error}`)
        }
    }
}

export default new NewsController();