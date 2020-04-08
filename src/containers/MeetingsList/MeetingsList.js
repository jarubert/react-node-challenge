import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { List } from 'material-ui';
import { MeetingListItem } from '../../components';
import { fetchMeetings, fetchNotes, selectMeeting } from '../../ducks';
import { getMeetings } from '../../selectors';

class MeetingsList extends Component {
    componentDidMount() {
        const { onFetchMeetings } = this.props;
        onFetchMeetings();
    }

    render() {
        const { meetings, onFetchNotes, onSelectMeeting } = this.props;
        return (
            <List style={{ width: 300 }}>
                {meetings.map(meeting => (
                    <MeetingListItem
                        key={meeting.id}
                        meeting={meeting}
                        onClick={selectedMeeting => {
                            onSelectMeeting(selectedMeeting);
                            onFetchNotes(selectedMeeting.id);
                        }}
                    />
                ))}
            </List>
        );
    }
}

MeetingsList.propTypes = {
    meetings: PropTypes.instanceOf(Immutable.List).isRequired,
    onFetchMeetings: PropTypes.func.isRequired,
    onSelectMeeting: PropTypes.func.isRequired,
    onFetchNotes: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        meetings: getMeetings(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchMeetings: () => dispatch(fetchMeetings()),
        onFetchNotes: meetingId => dispatch(fetchNotes(meetingId)),
        onSelectMeeting: meeting => dispatch(selectMeeting(meeting))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeetingsList);
