import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { List } from 'material-ui';
import { NoteCard } from '../../components';
import { Meeting } from '../../models';
import { fetchNotes, deleteNote, editNote } from '../../ducks';
import { getNotes, getSelectedMeeting } from '../../selectors';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = { editNoteId: '' };
    }

    onSubmitEdit(noteInput) {
        const { selectedMeeting, onFetchNotes, onEditNote } = this.props;
        onEditNote({ id: this.state.editNoteId, text: noteInput });
        onFetchNotes(selectedMeeting.id);
        this.setState({ editNoteId: '' });
    }

    onDelete(noteId) {
        const { selectedMeeting, onDeleteNote, onFetchNotes } = this.props;
        onDeleteNote(noteId);
        onFetchNotes(selectedMeeting.id);
    }

    onEdit(noteId) {
        this.setState({ editNoteId: noteId });
    }

    onEditCancel() {
        this.setState({ editNoteId: '' });
    }

    render() {
        const { notes, selectedMeeting } = this.props;
        if (selectedMeeting !== null) {
            return (
                <List style={{ width: 300 }}>
                    {notes.map(note => (
                        <NoteCard
                            key={note.id}
                            note={note}
                            isEdit={this.state.editNoteId === note.id}
                            onEditSubmit={newNote => this.onSubmitEdit(newNote)}
                            onEditCancel={() => this.onEditCancel()}
                            onEdit={noteId => this.onEdit(noteId)}
                            onDelete={noteId => this.onDelete(noteId)}
                        />
                    ))}
                </List>
            );
        }
        return <div />;
    }
}

NoteList.propTypes = {
    notes: PropTypes.instanceOf(Immutable.List).isRequired,
    selectedMeeting: PropTypes.instanceOf(Meeting),
    onFetchNotes: PropTypes.func.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
    onEditNote: PropTypes.func.isRequired
};

NoteList.defaultProps = {
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
        onFetchNotes: meetingId => dispatch(fetchNotes(meetingId)),
        onDeleteNote: noteId => dispatch(deleteNote(noteId)),
        onEditNote: note => dispatch(editNote(note))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteList);
