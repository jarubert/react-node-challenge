import Immutable from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { Meeting } from '../models';

export const fetchMeetings = createAction('FETCH_MEETINGS');
export const fetchMeetingsCompleted = createAction('FETCH_MEETINGS_COMPLETED');
export const selectMeeting = createAction('SELECT_MEETING');

export const meetingsReducer = handleActions(
    {
        [fetchMeetingsCompleted]: (state, { payload }) =>
            Immutable.List(payload.meetings.map(meeting => new Meeting(meeting)))
    },
    Immutable.List()
);

export const selectedMeetingReducer = handleActions(
    {
        [selectMeeting]: (state, { payload }) => payload
    },
    null
);
