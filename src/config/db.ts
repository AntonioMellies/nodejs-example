import * as mongoose from 'mongoose';
import * as EnvConfig from './envConfig';

class DataBase {
    
    createConnection(){
        console.log(`createConnection DB_HOST: ${EnvConfig.DB_HOST}`)
        mongoose.connect(EnvConfig.DB_HOST);
    }
}

export default DataBase;