import { Router } from "express";

// Controllers
import { GetAllUserController } from "./controllers/GetAllUsersService";
import { GetUserByIdController } from "./controllers/GetUserByIdController";
import { ProductCreateController } from "./controllers/ProductCreateController";
import { UserCreateController } from "./controllers/UserCreateController";
import { UserDeleteController } from "./controllers/UserDeleteController";
import { UserLoginController } from "./controllers/UserLoginController";
import { UserUpdateController } from "./controllers/UserUpdateController";

//Middlewares
import auth from "./middlewares/auth";
import isLogged from "./middlewares/isLogged";

const routes = Router();

routes.post("/login", new UserLoginController().handle);

routes.post("/users", new UserCreateController().handle);
routes.get("/users", auth, new GetAllUserController().handle);
routes.get("/users/:id", auth, new GetUserByIdController().handle);
routes.put("/users/:id", auth, isLogged, new UserUpdateController().handle);
routes.delete("/users/:id", auth, isLogged, new UserDeleteController().handle);

routes.post("/products/:id", auth, new ProductCreateController().handle);

export { routes };