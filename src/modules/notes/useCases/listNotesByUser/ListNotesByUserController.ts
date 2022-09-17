import { Request, Response } from "express";
import { container } from "tsyringe";
import ListNotesByUserUseCase from "./ListNotesByUserUseCase";

export default class ListNotesByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const listNotesByUserUseCase = container.resolve(ListNotesByUserUseCase);

    const userNotes = await listNotesByUserUseCase.execute(user_id);

    return response.json(userNotes);
  }
}
