import { Note } from "@modules/notes/infra/prisma/interfaces/Note";
import { IUpdateNoteDTO } from "@modules/notes/repositories/dtos/IUpdateNoteDTO";
import { INotesRepository } from "@modules/notes/repositories/INotesRepository";

import { inject, injectable } from "tsyringe";

@injectable()
export default class UpdateNoteUseCase {
  constructor(
    @inject("NotesRepository")
    private NotesRepository: INotesRepository
  ) {}

  async execute(data: IUpdateNoteDTO): Promise<Note> {
    const note = await this.NotesRepository.update(data);

    return note;
  }
}
