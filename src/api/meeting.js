import { get } from '../lib/HTTP';

export function getMeetingsFromAPI() {
    return get(`/meetings`);
}
