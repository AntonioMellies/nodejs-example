import * as express from "express";
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import DataBase from "./config/db";
import NewsRoutes from "./routes/newsRoutes";

class StartUp {

    public app: express.Application;
    private _db: DataBase;

    constructor() {
        this.app = express();
        
        this._db = new DataBase();
        this._db.createConnection();
        
        this.middler();
        this.routes();
    }

    enableCors(){
        const options: cors.CorsOptions = {
            methods: "GET,OPTIONS,PUT,POST,DELETE",
            origin:"*"
        }
        this.app.use(cors(options));
    }

    middler(){
        this.enableCors()
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended : false }));
    }

    routes(){
        this.app.route('/').get((req,res)=>{
            res.send( {versao:'0.0.1'} );
        })

        this.app.use('/api/news',NewsRoutes);
    }
}

export default new StartUp();