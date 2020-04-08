/**
 * Get the meetings from the state.
 * @public
 * @param {Immutable.Map} state The application state.
 * @returns {Immutable.List} The list of meetings.
 */
export function getMeetings(state) {
    return state.get('meetings');
}

/**
 * Get the selected Meting from the state.
 * @public
 * @param {Immutable.Map} state The application state.
 * @returns {Meeting} The selected meeting.
 */
export function getSelectedMeeting(state) {
    return state.get('selectedMeeting');
}
