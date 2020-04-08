import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { List } from 'material-ui';
import { Meeting, Note } from '../../models';
import { createNote } from '../../ducks';
import { getNotes, getSelectedMeeting } from '../../selectors';
import { MeetingNoteForm } from '../../components';

class MeetingDetail extends Component {
    // state = { selectedMeetingId: null };

    // onMeetingSelect = meetingId => {
    //     this.setState({ selectedMeetingId: meetingId });
    // };

    onSubmit(noteInput) {
        const { selectedMeeting, onCreateNote } = this.props;
        onCreateNote(new Note({ text: noteInput, meetingId: selectedMeeting.id }));
    };

    render() {
        const { notes, selectedMeeting } = this.props;
        if (selectedMeeting !== null) {
            return (
                <div>
                    <MeetingNoteForm meetingId={selectedMeeting.id} onSubmitAction={() => this.onSubmit}/>
                    <List style={{ width: 300 }}>
                        {notes.map(note => (
                            <div key={note.id}>{note.text}</div>
                        ))}
                    </List>
                </div>
            );
        }
        return <div />;
    }
}

MeetingDetail.propTypes = {
    notes: PropTypes.instanceOf(Immutable.List).isRequired,
    selectedMeeting: PropTypes.instanceOf(Meeting),
    onCreateNote: PropTypes.func.isRequired
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
        onCreateNote: note => dispatch(createNote(note))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeetingDetail);
