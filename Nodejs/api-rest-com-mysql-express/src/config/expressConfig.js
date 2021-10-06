//libs / frameworks
import express from "express";

//Routes
import homeRoute from "../routes/homeRoutes.js";

export default () => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(homeRoute);
  
  app.set('views', '../views');

  return app;
};
