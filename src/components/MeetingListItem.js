import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui';
import { Meeting } from '../models';

export default class MeetingListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { meeting, onClick } = this.props;
        onClick(meeting.id);
    }

    render() {
        const { meeting } = this.props;

        return (
            <ListItem
                onClick={this.handleClick}
                primaryText={meeting.title}
                secondaryText={meeting.startAt.toLocaleString()}
            />
        );
    }
}

MeetingListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    meeting: PropTypes.instanceOf(Meeting).isRequired
};
