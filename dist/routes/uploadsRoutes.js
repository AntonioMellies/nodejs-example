"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const uploadsController_1 = require("../controller/uploadsController");
let routes = express.Router();
routes.post('/', uploadsController_1.default.receiveFile);
exports.default = routes;
