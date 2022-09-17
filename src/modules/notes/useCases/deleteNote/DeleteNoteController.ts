import { Request, Response } from "express";
import { container } from "tsyringe";
import DeleteNoteUseCase from "./DeleteNoteUseCase";

export default class DeleteNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: note_id } = request.params;
    const { id: user_id } = request.user;

    const deleteNoteUseCase = container.resolve(DeleteNoteUseCase);

    const note = await deleteNoteUseCase.execute({ user_id, note_id });
    return response.json(note);
  }
}
