import { ICreateNoteDTO } from "@modules/notes/repositories/dtos/ICreateNoteDTO";
import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateNoteUseCase from "./createNoteUseCase";

export default class CreateNoteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateNoteDTO = request.body;
    const createNoteUseCase = container.resolve(CreateNoteUseCase);

    const note = await createNoteUseCase.execute(data);
    return response.json(note);
  }
}
