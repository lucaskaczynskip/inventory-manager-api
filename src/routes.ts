import { Router } from "express";

// Controllers
import { GetAllUserController } from "./controllers/GetAllUsersService";
import { GetUserByIdController } from "./controllers/GetUserByIdController";
import { UserCreateController } from "./controllers/UserCreateController";
import { UserLoginController } from "./controllers/UserLoginController";

//Middlewares
import auth from "./middlewares/auth";

const routes = Router();

routes.post("/login", new UserLoginController().handle);

routes.post("/users", new UserCreateController().create);
routes.get("/users", auth, new GetAllUserController().handle);
routes.get("/users/:id", auth, new GetUserByIdController().handle);

export { routes };