import { combineReducers } from 'redux-immutable';
import meetings from './meeting';

export * from './meeting';

export default combineReducers({
    meetings
});
