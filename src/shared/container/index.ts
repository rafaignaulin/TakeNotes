import { UsersRepository } from "@modules/accounts/infra/prisma/UsersRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/prisma/UsersTokensRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { NotesRepository } from "@modules/notes/infra/prisma/NotesRepository";
import { INotesRepository } from "@modules/notes/repositories/INotesRepository";
import { container } from "tsyringe";

import "./providers/index";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<INotesRepository>(
  "NotesRepository",
  NotesRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);
