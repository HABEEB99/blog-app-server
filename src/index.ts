import express, { Express } from "express";
import AppServer from "./server";

const initializeApp = (): void => {
  const app: Express = express();
  const appServer = new AppServer(app);

  appServer.start();
};

initializeApp();
