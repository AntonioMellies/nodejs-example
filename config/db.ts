import * as mongoose from 'mongoose';

class DataBase {
    private DB_URL = "mongodb://mongodb-service/db_portal";

    createConnection(){
        mongoose.connect(this.DB_URL);
    }
}

export default DataBase;