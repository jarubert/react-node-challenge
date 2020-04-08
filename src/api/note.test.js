import { get } from '../lib/HTTP';
import { getNotesFromAPI } from './';

jest.mock('../lib/HTTP');
afterEach(() => jest.resetAllMocks());

describe('getNotesFromAPI', () => {
    it('should send a GET request', async () => {
        await getNotesFromAPI('8a91303f-a072-472c-9ce3-08ff6a5b8b28');
        expect(get).toHaveBeenCalledTimes(1);
        expect(get).toHaveBeenCalledWith('/notes/8a91303f-a072-472c-9ce3-08ff6a5b8b28');
    });
});
