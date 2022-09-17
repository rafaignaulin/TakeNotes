import { Note } from "@modules/notes/infra/prisma/interfaces/Note";
import { ICreateNoteDTO } from "@modules/notes/repositories/dtos/ICreateNoteDTO";
import { INotesRepository } from "@modules/notes/repositories/INotesRepository";

import { inject, injectable } from "tsyringe";

interface IRequest {
  user_id: string;
  note_id: string;
}

@injectable()
export default class DeleteNoteUseCase {
  constructor(
    @inject("NotesRepository")
    private NotesRepository: INotesRepository
  ) {}

  async execute({ user_id, note_id }: IRequest): Promise<Note> {
    const note = await this.NotesRepository.delete(user_id, note_id);

    return note;
  }
}
