import { Router } from "express";
import { UserCreateController } from "./controllers/UserCreateController";
import { UserLoginController } from "./controllers/UserLoginController";

const routes = Router();

routes.post("/users", new UserCreateController().create);
routes.post("/login", new UserLoginController().handle);

export { routes };