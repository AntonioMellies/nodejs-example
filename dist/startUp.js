"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db_1 = require("./config/db");
const auth_1 = require("./middlewares/auth");
const newsRoutes_1 = require("./routes/newsRoutes");
const uploadsRoutes_1 = require("./routes/uploadsRoutes");
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
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        this.app.use(auth_1.default.validate);
        this.app.use('/api/upload', uploadsRoutes_1.default);
        this.app.use('/api/news', newsRoutes_1.default);
    }
}
exports.default = new StartUp();
