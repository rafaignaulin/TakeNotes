import { Note } from ".prisma/client";
import { ICreateNoteDTO } from "./dtos/ICreateNoteDTO";




export interface INotesRepository {
    create(data: ICreateNoteDTO): Promise<Note>;
    findById(id: String): Promise<Note>;
    findAllNotesByUser(user_id: String): Promise<Note[]>;
}