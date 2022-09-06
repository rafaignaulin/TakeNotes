import CreateNoteController from "@modules/notes/useCases/createNote/createNoteController";
import { ListNotesByUserController } from "@modules/notes/useCases/listNotesByUser/ListNotesByUserController";
import { Router } from "express";

export const notesRoutes = Router();

const createNoteController = new CreateNoteController();
const listNotesByUserController = new ListNotesByUserController();

notesRoutes.get("/", listNotesByUserController.handle);
notesRoutes.post("/create", createNoteController.handle);
