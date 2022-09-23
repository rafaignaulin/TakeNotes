import NotesRepositoryInMemory from '@modules/notes/repositories/in-memory/NotesRepositoryInMemory';
import CreateNoteUseCase from './createNoteUseCase';

let notesRepositoryInMemory: NotesRepositoryInMemory;
let createNoteUseCase: CreateNoteUseCase;

describe('Create Note Tests',() => {
beforeEach(() => {
    notesRepositoryInMemory = new NotesRepositoryInMemory();
    createNoteUseCase = new CreateNoteUseCase(notesRepositoryInMemory);
})

    it('should be able to create a note', async () => {
        const note = await createNoteUseCase.execute({
            title: 'Nota Teste',
            description: 'Nota teste longa Nota teste longa Nota teste longaNota teste longa Nota teste longa ',
            priority: 'MID',
            first_date: new Date(),
            end_date: new Date(),
            user_id: 'user_id'
        });

        expect(note).toHaveProperty('id');
    });
});