import StartUp from './startUp';
import * as EnvConfig from './config/envConfig';

StartUp.app.listen(EnvConfig.API_PORT,function() {
    console.log(`Servidor executando na porta: ${EnvConfig.API_PORT}`)
    console.log(`Ambiente de : ${EnvConfig.NODE_ENV}`)
});