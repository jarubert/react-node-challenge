import { all, fork } from 'redux-saga/effects';
import meeting from './meeting';
import note from './note';

export default function* mainSaga() {
    yield all([fork(meeting), fork(note)]);
}
