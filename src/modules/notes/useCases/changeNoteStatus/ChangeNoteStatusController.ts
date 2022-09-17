import { Request, Response } from "express";
import { container } from "tsyringe";
import ChangeNoteStatusUseCase from "./ChangeNoteStatusUseCase";

export default class ChangeNoteStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: note_id } = request.params;
    const { id: user_id } = request.user;
    const { status } = request.body;

    const changeNoteStatusUseCase = container.resolve(ChangeNoteStatusUseCase);

    const note = changeNoteStatusUseCase.execute({
      note_id,
      user_id,
      status,
    });

    return response.json(note);
  }
}
