import CreateUserController from "@modules/accounts/useCases/CreateUser/CreateUserController";
import { Router } from "express";
// import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

export const usersRoutes = Router();
const createUserController = new CreateUserController();

usersRoutes.post("/create", createUserController.handle);