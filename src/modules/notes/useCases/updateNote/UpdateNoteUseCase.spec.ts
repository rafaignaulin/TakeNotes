import NotesRepositoryInMemory from '../../../notes/repositories/in-memory/NotesRepositoryInMemory';
import CreateNoteUseCase from '../createNote/createNoteUseCase';

let notesRepositoryInMemory: NotesRepositoryInMemory;
let createNoteUseCase: CreateNoteUseCase;

describe('Update Note Tests',() => {
beforeEach(() => {
    notesRepositoryInMemory = new NotesRepositoryInMemory();
    createNoteUseCase = new CreateNoteUseCase(notesRepositoryInMemory);
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
        const noteUpdated = await notesRepositoryInMemory.updateStatus(note.id, "FINISHED")

        expect(noteUpdated.status).toEqual("FINISHED")
    });
});