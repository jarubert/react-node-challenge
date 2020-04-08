import { get, post } from '../lib/HTTP';

export function getNotesFromAPI(meetingId) {
    return get(`/notes/${meetingId}`);
}

export function createNoteFromAPI(note) {
    return post(`/notes/`, '', note);
}
