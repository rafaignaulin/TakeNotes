import { Note } from "@modules/notes/infra/prisma/interfaces/Note";
import { ICreateNoteDTO } from "@modules/notes/repositories/dtos/ICreateNoteDTO";
import { INotesRepository } from "@modules/notes/repositories/INotesRepository";

import { inject, injectable } from "tsyringe";

@injectable()
export default class CreateNoteUseCase {
  constructor(
    @inject("NotesRepository")
    private NotesRepository: INotesRepository
  ) {}

  async execute(data: ICreateNoteDTO): Promise<Note> {
    const note = await this.NotesRepository.create(data);

    return note;
  }
}
