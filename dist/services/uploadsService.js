"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const EnvConfig = require("../config/envConfig");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, EnvConfig.UPLOADS_FOLDER_PATH);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const uploads = multer({ storage: storage }).single('file');
exports.default = uploads;
