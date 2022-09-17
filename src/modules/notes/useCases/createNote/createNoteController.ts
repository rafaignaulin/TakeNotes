import { ICreateNoteDTO } from "@modules/notes/repositories/dtos/ICreateNoteDTO";
import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateNoteUseCase from "./createNoteUseCase";

export default class CreateNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      title,
      description,
      priority,
      first_date,
      end_date,
    }: ICreateNoteDTO = request.body;
    console.log(request.user);
    const { id } = request.user;
    const createNoteUseCase = container.resolve(CreateNoteUseCase);

    const note = await createNoteUseCase.execute({
      user_id: id,
      title,
      description,
      priority,
      first_date,
      end_date,
    });
    return response.json(note);
  }
}
