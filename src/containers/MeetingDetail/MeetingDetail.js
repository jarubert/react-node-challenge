import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Meeting, Note } from '../../models';
import { createNote, fetchNotes } from '../../ducks';
import { getNotes, getSelectedMeeting } from '../../selectors';
import NoteForm from '../NoteForm/NoteForm';
import NoteList from '../NoteList/NoteList';

class MeetingDetail extends Component {
    onSubmit(noteInput) {
        const { selectedMeeting, onCreateNote, onFetchNotes } = this.props;
        onCreateNote(new Note({ id: undefined, text: noteInput, meetingId: selectedMeeting.id }));
        onFetchNotes(selectedMeeting.id);
    }

    render() {
        const { selectedMeeting } = this.props;
        if (selectedMeeting !== null) {
            return (
                <div style={{ paddingLeft: '10px', paddingTop: '70px' }}>
                    <h3>{selectedMeeting.title}</h3>
                    <NoteForm onSubmitAction={newNote => this.onSubmit(newNote)} />
                    <NoteList />
                </div>
            );
        }
        return <div />;
    }
}

MeetingDetail.propTypes = {
    selectedMeeting: PropTypes.instanceOf(Meeting),
    onCreateNote: PropTypes.func.isRequired,
    onFetchNotes: PropTypes.func.isRequired
};

MeetingDetail.defaultProps = {
    selectedMeeting: null
};

function mapStateToProps(state) {
    return {
        notes: getNotes(state),
        selectedMeeting: getSelectedMeeting(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onCreateNote: note => dispatch(createNote(note)),
        onFetchNotes: meetingId => dispatch(fetchNotes(meetingId))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeetingDetail);
