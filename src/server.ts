import express from "express";

class Server {
  public app: express.Application;

  constructor(){
    this.app = express();
    this.middleware();
  }
  private middleware(){
    this.app.use(express.json());
  }
}

export default Server;