import NotesRepositoryInMemory from '@modules/notes/repositories/in-memory/NotesRepositoryInMemory';
import CreateNoteUseCase from '../createNote/createNoteUseCase';
import ListNotesByUserUseCase from './ListNotesByUserUseCase';

let notesRepositoryInMemory: NotesRepositoryInMemory;
let createNoteUseCase: CreateNoteUseCase;
let listNotesByUserUseCase: ListNotesByUserUseCase;

describe('List Notes By User Tests',() => {
beforeEach(() => {
    notesRepositoryInMemory = new NotesRepositoryInMemory();
    createNoteUseCase = new CreateNoteUseCase(notesRepositoryInMemory);
    listNotesByUserUseCase = new ListNotesByUserUseCase(notesRepositoryInMemory);
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
        const note2 = await createNoteUseCase.execute({
            title: 'Nota Teste',
            description: 'Nota teste longa Nota teste longa Nota teste longaNota teste longa Nota teste longa ',
            priority: 'MID',
            first_date: new Date(),
            end_date: new Date(),
            user_id: 'user_id'
        });
        const note3 = await createNoteUseCase.execute({
            title: 'Nota Teste',
            description: 'Nota teste longa Nota teste longa Nota teste longaNota teste longa Nota teste longa ',
            priority: 'MID',
            first_date: new Date(),
            end_date: new Date(),
            user_id: 'user_id'
        });
        
        const notes = await listNotesByUserUseCase.execute('user_id');

        expect(notes).toEqual([note1, note2, note3]);

    });
});