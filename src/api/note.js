import { get, post, del, put } from '../lib/HTTP';

export function getNotesFromAPI(meetingId) {
    return get(`/notes/${meetingId}`);
}

export function createNoteFromAPI(note) {
    return post(`/notes`, '', note);
}

export function deleteNoteFromAPI(noteId) {
    return del(`/notes/${noteId}`);
}

export function editNoteFromAPI(noteId, text) {
    return put(`/notes/${noteId}`, '', text);
}
