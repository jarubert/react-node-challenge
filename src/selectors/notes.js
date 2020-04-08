/**
 * Get the notes from the state.
 * @public
 * @param {Immutable.Map} state The application state.
 * @returns {Immutable.List} The list of notes for selected Meeting.
 */
export function getNotes(state) {
    return state.get('notes');
}
