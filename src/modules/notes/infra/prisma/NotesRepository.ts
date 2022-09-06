import { Prisma } from ".prisma/client";
import { ICreateNoteDTO } from "@modules/notes/repositories/dtos/ICreateNoteDTO";
import { INotesRepository } from "@modules/notes/repositories/INotesRepository";
import prismaClient from "@shared/infra/http/prisma";
import { Note } from "./interfaces/Note";

export class NotesRepository implements INotesRepository {
  async create({
    user_id,
    title,
    description,
    priority,
    first_date,
    end_date,
  }: ICreateNoteDTO): Promise<Note> {
    const status = "CREATED";
    const image_url = ""; // tirar

    const userFound: Prisma.UserWhereUniqueInput = { id: user_id };

    const noteCreated: Prisma.NoteCreateInput = {
      user: { connect: userFound },
      title,
      description,
      priority,
      first_date,
      end_date,
      status,
      image_url,
    };

    const userCreated = prismaClient.note.create({ data: noteCreated });

    return userCreated;
  }

  findById(id: String): Promise<Note> {
    return prismaClient.note.findUnique({ where: { id } });
  }
  async findAllNotesByUser(user_id: String): Promise<Note[]> {
    const user = await prismaClient.user.findUnique({
      where: { id: user_id },
      select: { notes: true },
    });

    return user.notes;
  }
}
