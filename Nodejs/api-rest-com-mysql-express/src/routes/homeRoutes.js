import { Router } from "express";

//Controllers
import serviceController from "../controllers/serviceController.js";

const routes = Router();

routes.get("/atemdimentos", serviceController.getController);
routes.post("/atemdimentos", serviceController.postController);

export default routes;
