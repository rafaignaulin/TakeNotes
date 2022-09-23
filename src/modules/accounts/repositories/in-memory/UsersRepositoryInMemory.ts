
import { User } from "@modules/accounts/infra/prisma/interfaces/User";
import { randomUUID } from "crypto";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export default class UsersRepositoryInMemory implements IUsersRepository{
  users: User[] = [];

  async create({email, password, name, username}: ICreateUserDTO): Promise<User> {
    let user:User = {id: randomUUID() ,email, password, name, username};
    
    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}