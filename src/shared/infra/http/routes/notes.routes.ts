import ChangeNoteStatusController from "@modules/notes/useCases/changeNoteStatus/ChangeNoteStatusController";
import CreateNoteController from "@modules/notes/useCases/createNote/CreateNoteController";
import DeleteNoteController from "@modules/notes/useCases/deleteNote/DeleteNoteController";
import ListNotesByUserController from "@modules/notes/useCases/listNotesByUser/ListNotesByUserController";
import UpdateNoteController from "@modules/notes/useCases/updateNote/UpdateNoteController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

export const notesRoutes = Router();

const createNoteController = new CreateNoteController();
const deleteNoteController = new DeleteNoteController();
const updateNoteController = new UpdateNoteController();
const changeStatusNoteController = new ChangeNoteStatusController();
const listNotesByUserController = new ListNotesByUserController();

notesRoutes.get("/", ensureAuthenticated, listNotesByUserController.handle);
notesRoutes.post("/create", ensureAuthenticated, createNoteController.handle);
notesRoutes.put("/update", ensureAuthenticated, updateNoteController.handle);
notesRoutes.put(
  "/status/:id",
  ensureAuthenticated,
  changeStatusNoteController.handle
);
notesRoutes.delete(
  "/delete/:id",
  ensureAuthenticated,
  deleteNoteController.handle
);
