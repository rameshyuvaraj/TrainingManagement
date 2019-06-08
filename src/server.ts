import  * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoClient from "mongoose";
import { Request, Response } from "express";
import {Database} from "./startup/db";
import { Routes} from './startup/routes'

class App {
    app: express.Application;
    constructor() {
        //Express instance Creation
        this.app = express();
        this.configBodyParser();
        Database.connectMongoDb();
        this.app.listen(4000,"localhost",function(){
            console.log("Listening to localhost port 4000");
        });
        

        Routes.registerRoutes(this.app);
    }

    private configBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    
}

const trainingManagementApp = new App();