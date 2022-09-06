import { ICreateUserDTO } from "@modules/accounts/repositories/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { Prisma } from "@prisma/client";
import prismaClient from "@shared/infra/http/prisma";
import { User } from "./interfaces/User";

export class UsersRepository implements IUsersRepository {
  async create({
    name,
    username,
    password,
    email,
  }: ICreateUserDTO): Promise<User> {
    const user: Prisma.UserCreateInput = {
      name,
      username,
      email,
      password,
    };

    return prismaClient.user.create({ data: user });
  }
  async findByEmail(email: string): Promise<User> {
    const user = await prismaClient.user.findUnique({ where: { email } });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await prismaClient.user.findUnique({ where: { id } });
    return user;
  }
}
