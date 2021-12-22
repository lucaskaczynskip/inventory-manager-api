import { Router } from "express";

// Controllers
import { GetAllUserController } from "./controllers/GetAllUsersService";
import { UserCreateController } from "./controllers/UserCreateController";
import { UserLoginController } from "./controllers/UserLoginController";

//Middlewares
import auth from "./middlewares/auth";

const routes = Router();

routes.post("/login", new UserLoginController().handle);

routes.post("/users", new UserCreateController().create);
routes.get("/users", auth, new GetAllUserController().handle);

export { routes };