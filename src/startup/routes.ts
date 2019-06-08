import * as express from "express";

export class Routes {
    
    constructor() {

    }

    public static registerRoutes(app: express.Application) {

        app.get('/', (req: any, res: any) => {
            return res.send("Server Started...");
        });

    }
}