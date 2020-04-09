import { get, post, put, del } from '../lib/HTTP';
import { getNotesFromAPI, createNoteFromAPI, deleteNoteFromAPI, editNoteFromAPI } from './';

jest.mock('../lib/HTTP');
afterEach(() => jest.resetAllMocks());

describe('getNotesFromAPI', () => {
    it('should send a GET request', async () => {
        await getNotesFromAPI('8a91303f-a072-472c-9ce3-08ff6a5b8b28');
        expect(get).toHaveBeenCalledTimes(1);
        expect(get).toHaveBeenCalledWith('/notes/8a91303f-a072-472c-9ce3-08ff6a5b8b28');
    });
});

describe('createNoteFromAPI', () => {
    it('should send a POST request', async () => {
        await createNoteFromAPI('testNote');
        expect(post).toHaveBeenCalledTimes(1);
        expect(post).toHaveBeenCalledWith('/notes', '', 'testNote');
    });
});

describe('deleteNoteFromAPI', () => {
    it('should send a DELETE request', async () => {
        await deleteNoteFromAPI('8a91303f-a072-472c-9ce3-08ff6a5b8b28');
        expect(del).toHaveBeenCalledTimes(1);
        expect(del).toHaveBeenCalledWith('/notes/8a91303f-a072-472c-9ce3-08ff6a5b8b28');
    });
});

describe('editNoteFromAPI', () => {
    it('should send a PUT request', async () => {
        await editNoteFromAPI('8a91303f-a072-472c-9ce3-08ff6a5b8b28', 'text');
        expect(put).toHaveBeenCalledTimes(1);
        expect(put).toHaveBeenCalledWith('/notes/8a91303f-a072-472c-9ce3-08ff6a5b8b28', '', 'text');
    });
});
