import { Router } from "express";
import homeController from "./contollers/homeController.js";
import errorController from "./contollers/errorController.js";
import userController from "./contollers/userController.js";
import mythController from "./contollers/mythController.js";


const routes = Router();
// HomeController
routes.use(homeController);

// UserController
routes.use('/users', userController);

// mythController
routes.use('/myths', mythController);



// тук слагаме задължително на последно място  errorControler.js
routes.use(errorController);

export default routes;