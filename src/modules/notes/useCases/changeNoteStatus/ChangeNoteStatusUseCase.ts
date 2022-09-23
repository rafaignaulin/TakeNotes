import { Note, StatusEnum } from "@modules/notes/infra/prisma/interfaces/Note";
import { NotesRepository } from "@modules/notes/infra/prisma/NotesRepository";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  note_id: string;
  status: "CREATED" | "MODIFIED" | "DELETED" | "FINISHED";
}

@injectable()
export default class ChangeNoteStatusUseCase {
  constructor(
    @inject("NotesRepository")
    private notesRepository: NotesRepository
  ) {}

  async execute({ note_id, status }: IRequest): Promise<Note> {
    const foundNote = this.notesRepository.findById(note_id);

    if (!foundNote) throw new AppError("This note does not exists!");

    return await this.notesRepository.updateStatus(note_id, status);
  }
}
