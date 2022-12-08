import { Router } from "express";
import { UserController } from "../controllers/UserController";

const usersRouter = Router();
const userController = new UserController();

// Registro de novo usuário
usersRouter.post("/new", userController.create);

// Obter dados de um usário
usersRouter.get('/get/:id', userController.getUser)

// Obter todos usuários cadastrados
usersRouter.get("/all", userController.getAll)

// Atualizar usuário
usersRouter.put('/update/:id', userController.update)

// Excluir usuário
usersRouter.delete('/delete/:id', userController.delete)

export { usersRouter };