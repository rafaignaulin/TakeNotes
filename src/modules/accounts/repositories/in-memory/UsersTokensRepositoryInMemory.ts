
import { UserTokens } from "@modules/accounts/infra/prisma/interfaces/UserTokens";
import { randomUUID } from "crypto";
import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { IUsersTokensRepository } from "../IUsersTokensRepository";

export default class UsersTokensRepositoryInMemory
  implements IUsersTokensRepository {
  usersTokens: UserTokens[] = [];

  async create({
    user_id,
    refresh_token,
    expires_date,
  }: ICreateUserTokenDTO): Promise<UserTokens> {

    let userToken:UserTokens = {
      id: randomUUID(),
      user_id,
      refresh_token,
      expires_date,
      created_at: new Date()
    };

    this.usersTokens.push(userToken);

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      (user_token) =>
        user_token.user_id === user_id &&
        user_token.refresh_token === refresh_token
    );
    return userToken;
  }

  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    const userToken = this.usersTokens.find(
      (user_token) => user_token.refresh_token === refresh_token
    );
    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    const userToken = this.usersTokens.find((ut) => ut.id === id);
    this.usersTokens.splice(this.usersTokens.indexOf(userToken));
  }
}
