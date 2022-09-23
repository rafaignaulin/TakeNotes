import { Note } from "@modules/notes/infra/prisma/interfaces/Note";
import { INotesRepository } from "@modules/notes/repositories/INotesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export default class ListNoteUseCase {
  constructor(
    @inject("NotesRepository")
    private notesRepository: INotesRepository
  ) {}

  async execute(note_id: string): Promise<Note> {
    const note = await this.notesRepository.findById(note_id);

    return note;
  }
}
