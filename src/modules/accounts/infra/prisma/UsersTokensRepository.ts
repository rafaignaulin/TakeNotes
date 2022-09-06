import { Prisma, PrismaClient } from ".prisma/client";
import { ICreateUserTokenDTO } from "@modules/accounts/repositories/dtos/ICreateUserTokenDTO";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import prismaClient from "@shared/infra/http/prisma";
import { UserTokens } from "./interfaces/UserTokens";

export class UsersTokensRepository implements IUsersTokensRepository {
  async create({
    user_id,
    refresh_token,
    expires_date,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = prismaClient.userToken.create({
      data: {
        user_id,
        refresh_token,
        expires_date,
      },
    });

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    return prismaClient.userToken.findUnique({
      where: { userRefreshToken: { user_id, refresh_token } },
    });
  }

  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    return prismaClient.userToken.findFirst({
      where: { refresh_token },
    });
  }

  async deleteById(id: string): Promise<void> {
    await prismaClient.userToken.delete({ where: { id } });
  }
}
