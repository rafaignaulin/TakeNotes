import NotesRepositoryInMemory from '@modules/notes/repositories/in-memory/NotesRepositoryInMemory';
import CreateNoteUseCase from '../createNote/createNoteUseCase';
import ListNoteUseCase from './ListNoteUseCase';

let notesRepositoryInMemory: NotesRepositoryInMemory;
let createNoteUseCase: CreateNoteUseCase;
let listNoteUseCase: ListNoteUseCase;

describe('List Note Tests',() => {
beforeEach(() => {
    notesRepositoryInMemory = new NotesRepositoryInMemory();
    createNoteUseCase = new CreateNoteUseCase(notesRepositoryInMemory);
    listNoteUseCase = new ListNoteUseCase(notesRepositoryInMemory);
})

    it('should be able to create a note', async () => {
        const note1 = await createNoteUseCase.execute({
            title: 'Nota Teste',
            description: 'Nota teste longa Nota teste longa Nota teste longaNota teste longa Nota teste longa ',
            priority: 'MID',
            first_date: new Date(),
            end_date: new Date(),
            user_id: 'user_id'
        });
        const note = await listNoteUseCase.execute(note1.id);

        expect(note).toHaveProperty('id');
        expect(note).toHaveProperty('status');
        expect(note.status).toEqual('CREATED');

    });
});