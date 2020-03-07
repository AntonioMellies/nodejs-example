"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const EnvConfig = require("../config/envConfig");
class Auth {
    validate(req, res, next) {
        let token = req.headers['x-access-token'] || req.headers['authorization'];
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length);
        }
        if (token) {
            jwt.verify(token, EnvConfig.JWT_SECRET, function (err, decoded) {
                if (err) {
                    res.status(403).send({
                        success: false,
                        message: '403 - forbidden'
                    });
                }
                else {
                    next();
                }
            });
        }
        else {
            res.status(401).send({
                success: false,
                message: '401 - unauthorized'
            });
        }
    }
}
exports.default = new Auth();
