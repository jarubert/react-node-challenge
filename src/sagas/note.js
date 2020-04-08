import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchNotes, fetchNotesCompleted, createNote } from '../ducks';
import { getNotesFromAPI, createNoteFromAPI } from '../api';

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

export default function* noteSaga() {
    yield takeEvery(fetchNotes, fetchNotesSaga);
    yield takeEvery(createNote, createNoteSaga);
}
