import { Note } from "@modules/notes/infra/prisma/interfaces/Note";
import { INotesRepository } from "@modules/notes/repositories/INotesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListNotesByUserUseCase {
  constructor(
    @inject("NotesRepository")
    private notesRepository: INotesRepository
  ) {}

  async execute(user_id: string): Promise<Note[]> {
    const notesByUser = await this.notesRepository.findAllNotesByUser(user_id);

    return notesByUser;
  }
}
