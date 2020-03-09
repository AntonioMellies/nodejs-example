"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startUp_1 = require("./startUp");
const EnvConfig = require("./config/envConfig");
startUp_1.default.app.listen(EnvConfig.API_PORT, function () {
    console.log(`Servidor executando na porta: ${EnvConfig.API_PORT}`);
    console.log(`Ambiente de : ${EnvConfig.NODE_ENV}`);
});
