"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UtilsController {
    constructor() {
        this.sendResponse = function (res, statusCode, data) {
            return res.status(statusCode).json({ result: data });
        };
    }
}
exports.default = new UtilsController();
