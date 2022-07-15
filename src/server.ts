import express from "express";
import errorHandler from "./Middleware/errorHandler";
import endpoints from "./routes";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
  }
  private middleware() {
    this.app.use(express.json());
    this.app.use(endpoints);
    this.app.use(errorHandler);
  }
}

export default Server;