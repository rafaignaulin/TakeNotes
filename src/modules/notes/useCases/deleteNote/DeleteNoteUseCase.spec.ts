import NotesRepositoryInMemory from '@modules/notes/repositories/in-memory/NotesRepositoryInMemory';
import CreateNoteUseCase from '../createNote/createNoteUseCase';
import DeleteNoteUseCase from './DeleteNoteUseCase';

let notesRepositoryInMemory: NotesRepositoryInMemory;
let createNoteUseCase: CreateNoteUseCase;
let deleteNoteUseCase: DeleteNoteUseCase;

describe('Delete Note Tests',() => {
beforeEach(() => {
    notesRepositoryInMemory = new NotesRepositoryInMemory();
    createNoteUseCase = new CreateNoteUseCase(notesRepositoryInMemory);
    deleteNoteUseCase = new DeleteNoteUseCase(notesRepositoryInMemory);
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

        await deleteNoteUseCase.execute({note_id: note.id, user_id:note.user_id})

        const verifyNotes = await notesRepositoryInMemory.findAllNotesByUser('user_id')

        expect(verifyNotes).toEqual([]);
    });
});