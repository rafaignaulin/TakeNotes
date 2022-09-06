import { User } from "../infra/prisma/interfaces/User";
import { ICreateUserDTO } from "./dtos/ICreateUserDTO";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
