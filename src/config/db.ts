import * as mongoose from 'mongoose';
import * as EnvConfig from './envConfig';

class DataBase {

    createConnection() {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        mongoose.connect(EnvConfig.DB_URI, options)
        .then(conn => console.log(`CreateConnection DB_URI: ${EnvConfig.DB_URI}`))
        .catch(err => console.log(`CreateConnection DB_URI: ${err}`));
    }
}

export default DataBase;