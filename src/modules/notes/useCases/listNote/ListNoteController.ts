import { Request, Response } from "express";
import { container } from "tsyringe";
import ListNoteUseCase from "./ListNoteUseCase";

export default class ListNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: note_id } = request.params;
    const listNoteUseCase = container.resolve(ListNoteUseCase);

    const userNotes = await listNoteUseCase.execute(note_id);

    return response.json(userNotes);
  }
}
