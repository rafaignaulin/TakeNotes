import { Note } from ".prisma/client";
import { StatusEnum } from "../infra/prisma/interfaces/Note";
import { ICreateNoteDTO } from "./dtos/ICreateNoteDTO";
import { IUpdateNoteDTO } from "./dtos/IUpdateNoteDTO";

export interface INotesRepository {
  create(data: ICreateNoteDTO): Promise<Note>;
  delete(user_id: string, note_id: string): Promise<Note>;
  update(data: IUpdateNoteDTO): Promise<Note>;
  updateStatus(note_id: string, status: StatusEnum): Promise<Note>;
  findById(id: String): Promise<Note>;
  findAllNotesByUser(user_id: String): Promise<Note[]>;
}
