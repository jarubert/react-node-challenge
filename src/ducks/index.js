import { combineReducers } from 'redux-immutable';
import { meetingsReducer, selectedMeetingReducer } from './meeting';
import notes from './note';

export * from './meeting';
export * from './note';

export default combineReducers({
    meetings: meetingsReducer,
    notes,
    selectedMeeting: selectedMeetingReducer
});
