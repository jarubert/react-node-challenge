/**
 * Get the meetings from the state.
 * @public
 * @param {Immutable.Map} state The application state.
 * @returns {Immutable.List} The list of meetings.
 */
export function getMeetings(state) {
    return state.get('meetings');
}
