import { prisma, Prisma } from ".prisma/client";
import { ICreateNoteDTO } from "@modules/notes/repositories/dtos/ICreateNoteDTO";
import { IUpdateNoteDTO } from "@modules/notes/repositories/dtos/IUpdateNoteDTO";
import { INotesRepository } from "@modules/notes/repositories/INotesRepository";
import AppError from "@shared/errors/AppError";
import prismaClient from "@shared/infra/http/prisma";
import { Note, StatusEnum } from "./interfaces/Note";

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

    const userFound: Prisma.UserWhereUniqueInput = { id: user_id };

    const noteCreated: Prisma.NoteCreateInput = {
      user: { connect: userFound },
      title,
      description,
      priority,
      first_date,
      end_date,
      status,
    };

    const userCreated = prismaClient.note.create({ data: noteCreated });

    return userCreated;
  }

  delete(user_id: string, note_id: string): Promise<Note> {
    const note = prismaClient.note.findFirst({
      where: { user_id: user_id, id: note_id },
    });
    if (!note) {
      throw new AppError("This note is not created by this user.");
    }

    return prismaClient.note.delete({ where: { id: note_id } });
  }

  async update({
    note_id,
    title,
    description,
    priority,
    first_date,
    end_date,
  }: IUpdateNoteDTO): Promise<Note> {
    const noteUpdated: Prisma.NoteUpdateInput = {
      id: note_id,
      title,
      description,
      priority,
      first_date,
      end_date,
      updated_at: new Date(),
    };

    return await prismaClient.note.update({
      where: { id: note_id },
      data: noteUpdated,
    });
  }

  async updateStatus(note_id: string, { status }: StatusEnum): Promise<Note> {
    return await prismaClient.note.update({
      where: { id: note_id },
      data: { id: note_id, status },
    });
  }

  findById(id: string): Promise<Note> {
    return prismaClient.note.findUnique({ where: { id } });
  }
  async findAllNotesByUser(user_id: string): Promise<Note[]> {
    const user = await prismaClient.user.findUnique({
      where: { id: user_id },
      select: { notes: true },
    });

    return user.notes;
  }
}
