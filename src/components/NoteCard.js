import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, CardHeader, CardActions, CardText, RaisedButton } from 'material-ui';
import { Note } from '../models';
import NoteForm from '../containers/NoteForm/NoteForm';

class NoteCard extends Component {
    renderNoteText(text) {
        const { isEdit, onEditSubmit, onEditCancel } = this.props;

        if (isEdit) {
            return (
                <NoteForm
                    title="Update your note"
                    onSubmitAction={newNote => onEditSubmit(newNote)}
                    onEditCancel={() => onEditCancel()}
                    isUpdate="true"
                    text={text}
                />
            );
        } else {
            return text;
        }
    }

    render() {
        const { note, onDelete, onEdit } = this.props;
        return (
            <Card style={{ marginBottom: '5px' }}>
                <CardHeader subtitle={moment(note.updatedAt).format('LLL')} />
                <CardText>{this.renderNoteText(note.text)}</CardText>
                <CardActions>
                    <RaisedButton
                        type="submit"
                        primary="true"
                        label="Edit"
                        onClick={() => onEdit(note.id)}
                    />
                    <RaisedButton
                        type="submit"
                        secondary="true"
                        label="Delete"
                        onClick={() => onDelete(note.id)}
                    />
                </CardActions>
            </Card>
        );
    }
}

NoteCard.propTypes = {
    note: PropTypes.instanceOf(Note).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEditSubmit: PropTypes.func.isRequired,
    onEditCancel: PropTypes.func,
    onEdit: PropTypes.func.isRequired,
    isEdit: PropTypes.bool.isRequired
};

NoteCard.defaultProps = {
    onEditCancel: () => {}
};

export default NoteCard;
