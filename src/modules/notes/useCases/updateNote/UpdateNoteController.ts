import { IUpdateNoteDTO } from "@modules/notes/repositories/dtos/IUpdateNoteDTO";
import { Request, Response } from "express";
import { container } from "tsyringe";
import UpdateNoteUseCase from "./UpdateNoteUseCase";

export default class UpdateNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      note_id,
      title,
      description,
      priority,
      first_date,
      end_date,
    }: IUpdateNoteDTO = request.body;

    const updateNoteUseCase = container.resolve(UpdateNoteUseCase);

    const note = await updateNoteUseCase.execute({
      note_id,
      title,
      description,
      priority,
      first_date,
      end_date,
    });
    return response.json(note);
  }
}
