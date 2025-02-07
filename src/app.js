import express from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";
import "./config/mongo.database.js";


class App {

  constructor(){
    this.app = express();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(helmet());
  }

  routes() {
    this.app.get('/', (req, res) => {
      res.send("This is my products manager api");
    })
  }

}

export default new App().app;