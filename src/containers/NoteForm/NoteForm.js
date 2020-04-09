import React, { Component } from 'react';
import { Card, CardActions, CardHeader, RaisedButton } from 'material-ui';
import PropTypes from 'prop-types';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        const { text } = props;
        this.state = { value: text };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const { onSubmitAction } = this.props;
        onSubmitAction(this.state.value);
        event.preventDefault();
        this.setState({ value: '' });
    }

    renderUpdateCancelButton() {
        const { isUpdate, onEditCancel } = this.props;

        if (isUpdate && onEditCancel != null) {
            return <RaisedButton secondary="true" label="Cancel" onClick={() => onEditCancel()} />;
        }

        return '';
    }

    render() {
        const { title, isUpdate } = this.props;
        return (
            <div style={{ width: `${isUpdate ? '275' : '300'}px` }}>
                <Card>
                    <form onSubmit={this.handleSubmit}>
                        <CardActions>
                            <CardHeader title={title} />
                            <textarea
                                name="noteInput"
                                value={this.state.value}
                                onChange={this.handleChange}
                                rows="5"
                                cols={`${isUpdate ? '39' : '44'}`}
                            />
                            <RaisedButton type="submit" primary="true" label="Save" />
                            {this.renderUpdateCancelButton()}
                        </CardActions>
                    </form>
                </Card>
            </div>
        );
    }
}

NoteForm.propTypes = {
    onSubmitAction: PropTypes.func.isRequired,
    onEditCancel: PropTypes.func,
    isUpdate: PropTypes.bool,
    title: PropTypes.string,
    text: PropTypes.string
};

NoteForm.defaultProps = {
    title: 'Create your note',
    onEditCancel: null,
    isUpdate: false,
    text: ''
};

export default NoteForm;
