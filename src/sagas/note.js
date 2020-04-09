import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchNotes, fetchNotesCompleted, createNote, deleteNote, editNote } from '../ducks';
import { getNotesFromAPI, createNoteFromAPI, deleteNoteFromAPI, editNoteFromAPI } from '../api';

function* fetchNotesSaga(action) {
    try {
        const notes = yield call(getNotesFromAPI, action.payload);
        yield put(fetchNotesCompleted({ notes }));
    } catch (error) {
        yield put(fetchNotesCompleted(error));
    }
}

function* createNoteSaga(action) {
    yield call(createNoteFromAPI, action.payload);
}

function* deleteNoteSaga(action) {
    yield call(deleteNoteFromAPI, action.payload);
}

function* editNoteSaga(action) {
    yield call(editNoteFromAPI, action.payload.id, action.payload);
}

export default function* noteSaga() {
    yield takeEvery(fetchNotes, fetchNotesSaga);
    yield takeEvery(createNote, createNoteSaga);
    yield takeEvery(deleteNote, deleteNoteSaga);
    yield takeEvery(editNote, editNoteSaga);
}
