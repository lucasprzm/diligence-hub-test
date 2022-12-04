import { Router } from "express";
import { UserController } from "../controllers/UserController";

const usersRouter = Router();
const userController = new UserController();

// Registro de novo usuário
usersRouter.post("/new", userController.create);

// Obter todos usuários cadastrados
usersRouter.get("/all-users", userController.getAll)

// Login de usuário
//usersRouter.post("/login", authenticateUserController.handle);

// Nome de usuário para a Home
//usersRouter.get("/name", getUsernameController.handle);

// Atualizar usuário
usersRouter.put('/update-user/:id', userController.update)

// Excluir usuário
usersRouter.delete('/delete-user/:id', userController.delete)

export { usersRouter };