import { Request, Response } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../database/data-source";


export class UserController {
  async create(request: Request, response: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const { name, address, phone, age, nickName } = request.body;
    
    if (!name) {
      throw new Error("Nome não foi preenchido!");
    }
    const userAlreadyExists = await userRepository.findOneBy({ name });
    if (userAlreadyExists) {
      throw new Error("Usuário já existe!");
    }

    const user = userRepository.create({
      name, address, phone, age, nickName
    });
    await userRepository.save(user);
    console.log(`User ${user.name} created successfully!`);
    return response.status(201).json({ message: "Usuário criado com sucesso!" });
  }

  async getUser(request: Request, response: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const { id } = request.params
    const user = await userRepository.findOneByOrFail({ id })

    if(!user) {
      throw new Error("Usuário não encontrado!");
    }
    console.log(`User ${user.name} obtained successfully!`);
    return response.status(200).json(user);
  }

  async getAll(request: Request, response: Response) {
    const userRepository = AppDataSource.getRepository(User);
    
    const users = await userRepository.find();
    console.log(`Users obtained successfully!`);
    return response.status(200).json(users);
  }

  async update(request: Request, response: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const { id } = request.params
    const { name, address, phone, age, nickName } = request.body;

    const user = await userRepository.findOneByOrFail({ id })

    if(!user) {
      throw new Error("Usuário não existe!");
    }

    await AppDataSource
    .createQueryBuilder()
    .update(User)
    .set({ name, address, phone, age, nickName })
    .where("id = :id", { id })
    .execute()

    const updatedUser = await userRepository.findOneByOrFail({ id })
    
    console.log(`User ${updatedUser.name} updated successfully!`);
    return response.status(200).json({ message: "Usuário atualizado com sucesso!"})

  }

  async delete(request: Request, response: Response) {
    const userRepository = AppDataSource.getRepository(User);
    const { id } = request.params

    const user = await userRepository.findOneByOrFail({ id })

    if(!user) {
      throw new Error("Usuário não existe!");
    }

    await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(User)
    .where("id = :id", { id })
    .execute()

    console.log(`User ${user.name} removed successfully!`);
    return response.status(200).json({ message: "Usuário excluído com sucesso!"})
  }
}