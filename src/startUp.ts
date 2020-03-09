import * as express from "express";
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';

import DataBase from "./config/db";
import AuthMiddleware from "./middlewares/auth.middleware";
import NewsRoutes from "./routes/news.routes";
import UploadsRoutes from "./routes/uploads.routes";

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
        this.app.use(compression());
    }

    routes(){
        this.app.route('/').get((req,res)=>{
            res.send( {versao:'0.0.1'} );
        })

        this.app.use(AuthMiddleware.validate);
        this.app.use('/api/upload',UploadsRoutes);
        this.app.use('/api/news',NewsRoutes);
    }
}

export default new StartUp();