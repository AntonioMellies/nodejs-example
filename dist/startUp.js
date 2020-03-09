"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const db_1 = require("./config/db");
const auth_middleware_1 = require("./middlewares/auth.middleware");
const news_routes_1 = require("./routes/news.routes");
const uploads_routes_1 = require("./routes/uploads.routes");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    enableCors() {
        const options = {
            methods: "GET,OPTIONS,PUT,POST,DELETE",
            origin: "*"
        };
        this.app.use(cors(options));
    }
    middler() {
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(compression());
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        this.app.use(auth_middleware_1.default.validate);
        this.app.use('/api/upload', uploads_routes_1.default);
        this.app.use('/api/news', news_routes_1.default);
    }
}
exports.default = new StartUp();
