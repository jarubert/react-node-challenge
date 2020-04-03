import { get } from '../lib/HTTP';
import { getMeetingsFromAPI } from './prompts';

jest.mock('../lib/HTTP');
afterEach(() => jest.resetAllMocks());

describe('getMeetingsFromAPI', () => {
    it('should send a GET request', async () => {
        await getMeetingsFromAPI();
        expect(get).toHaveBeenCalledTimes(1);
        expect(get).toHaveBeenCalledWith('/meetings');
    });
});
