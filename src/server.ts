import express from "express";
import endpoints from "./routes";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
  }
  private middleware() {
    this.app.use(express.json());
    this.app.use(endpoints)
  }
}

export default Server;