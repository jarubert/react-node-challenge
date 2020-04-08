import Immutable from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { Note } from '../models';

export const fetchNotes = createAction('FETCH_NOTES');
export const fetchNotesCompleted = createAction('FETCH_NOTES_COMPLETED');
export const createNote = createAction('CREATE_NOTE');

export default handleActions(
    {
        [fetchNotesCompleted]: (state, { payload }) =>
            Immutable.List(payload.notes.map(note => new Note(note)))
    },
    Immutable.List()
);
