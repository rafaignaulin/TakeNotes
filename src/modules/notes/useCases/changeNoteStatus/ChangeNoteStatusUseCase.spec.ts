import NotesRepositoryInMemory from '../../../notes/repositories/in-memory/NotesRepositoryInMemory';
import CreateNoteUseCase from '../createNote/createNoteUseCase';
import ChangeNoteStatusUseCase from './ChangeNoteStatusUseCase';

let notesRepositoryInMemory: NotesRepositoryInMemory;
let createNoteUseCase: CreateNoteUseCase;
let changeNoteStatusUseCase: ChangeNoteStatusUseCase

interface NoteRequest {
    note_id: string;
    user_id: string;
    status: "CREATED" | "MODIFIED" | "DELETED" | "FINISHED";
}

describe('Change Note Status Tests',() => {
beforeEach(() => {
    notesRepositoryInMemory = new NotesRepositoryInMemory();
    createNoteUseCase = new CreateNoteUseCase(notesRepositoryInMemory);
    changeNoteStatusUseCase = new ChangeNoteStatusUseCase(notesRepositoryInMemory);
})

    it('should be able to update a note status', async () => {
        const note = await createNoteUseCase.execute({
            title: 'Nota Teste',
            description: 'Nota teste longa Nota teste longa Nota teste longaNota teste longa Nota teste longa ',
            priority: 'MID',
            first_date: new Date(),
            end_date: new Date(),
            user_id: 'user_id'
        });

        let noteRequest:NoteRequest = {
            note_id: note.id,
            user_id: note.user_id,
            status: "FINISHED"
        }
        const noteUpdated = await changeNoteStatusUseCase.execute(noteRequest)

        expect(noteUpdated.status).toEqual("FINISHED")
    });
});