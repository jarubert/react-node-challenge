import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchMeetings, fetchMeetingsCompleted } from '../ducks';
import { getMeetingsFromAPI } from '../api';

function* fetchMeetingsSaga() {
    try {
        const meetings = yield call(getMeetingsFromAPI);
        yield put(fetchMeetingsCompleted({ meetings }));
    } catch (error) {
        yield put(fetchMeetingsCompleted(error));
    }
}

export default function* meetingSaga() {
    yield all([takeLatest(fetchMeetings, fetchMeetingsSaga)]);
}
