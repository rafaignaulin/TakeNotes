import { Note } from ".prisma/client";
import { StatusEnum } from "@modules/notes/infra/prisma/interfaces/Note";
import { randomUUID } from "crypto";
import { ICreateNoteDTO } from "../dtos/ICreateNoteDTO";
import { IUpdateNoteDTO } from "../dtos/IUpdateNoteDTO";
import { INotesRepository } from "../INotesRepository";




export default class NotesRepositoryInMemory implements INotesRepository {
    notes: Note[] = [];

    async create(data: ICreateNoteDTO): Promise<Note> {
        const {id, title, description, first_date, end_date, priority, user_id} = data;
        let note:Note = {
            id: randomUUID(),
            title,
            priority,
            first_date,
            end_date,
            user_id,
            description,
            status: "CREATED",
            created_at:new Date(),
            updated_at: new Date()
        };

        this.notes.push(note);
        return note; 
    }
    async delete(user_id: string, note_id: string): Promise<Note> { 
       const noteIndex =  this.notes.findIndex((note) => note.id === note_id && note.user_id === user_id);
       this.notes.splice(noteIndex, 1);
       return  this.notes.find((note) => note.id === note_id && note.user_id === user_id);
        
    }
    async update(data: IUpdateNoteDTO): Promise<Note> {
        const  note = this.notes.find((note) => note.id === data.note_id)
        Object.assign({...note}, {...data})
        
        this.notes.push(note);
        return note;
        


    }
    async updateStatus(note_id: string, status: any): Promise<Note> {
        const noteIndex =  this.notes.findIndex((note) => note.id === note_id);

        this.notes[noteIndex].status = status; 

        return this.notes[noteIndex];
    }
    async findById(id: String): Promise<Note> {
        return  this.notes.find((note) => note.id === id);
    }
    async findAllNotesByUser(user_id: String): Promise<Note[]> {
        return  this.notes.filter((note) => note.user_id === user_id);
    }

}