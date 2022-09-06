import { Prisma, PrismaClient } from "@prisma/client";
import AppError from "@shared/errors/AppError";

const prismaClient: PrismaClient = new PrismaClient();

// } catch (e) {
//   if (e instanceof Prisma.PrismaClientInitializationError)
//     throw new AppError(e.message, Number(e.errorCode));
// }

export default prismaClient;
