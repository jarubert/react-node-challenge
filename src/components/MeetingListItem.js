import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ListItem } from 'material-ui';
import { Meeting } from '../models';

export default class MeetingListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { meeting, onClick } = this.props;
        onClick(meeting);
    }

    render() {
        const { meeting } = this.props;

        return (
            <ListItem
                onClick={this.handleClick}
                primaryText={meeting.title}
                secondaryText={moment(meeting.startAt).format('LLL')}
            />
        );
    }
}

MeetingListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    meeting: PropTypes.instanceOf(Meeting).isRequired
};
