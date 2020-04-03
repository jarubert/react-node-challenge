import { all, fork } from 'redux-saga/effects';
import meeting from './meeting';

export default function* mainSaga() {
    yield all([fork(meeting)]);
}
