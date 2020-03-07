"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uploadsService_1 = require("../services/uploadsService");
const utilsController_1 = require("../utils/utilsController");
const HttpStatus = require("http-status");
class UploadsController {
    receiveFile(req, res) {
        try {
            uploadsService_1.default(req, res, function (err) {
                utilsController_1.default.sendResponse(res, HttpStatus.OK, "Arquivo salvo com sucesso");
            });
        }
        catch (error) {
            error => console.error.bind(console, `Error ${error}`);
        }
    }
    ;
}
exports.default = new UploadsController();
