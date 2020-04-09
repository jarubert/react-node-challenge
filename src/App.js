import { AppBar, MuiThemeProvider, Drawer, Toolbar } from 'material-ui';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Meeting } from './models';
import { fetchNotes, selectMeeting } from './ducks';
import { MeetingsList, MeetingDetail } from './containers';
import { getSelectedMeeting } from './selectors';

const drawerWidth = 256;

const styles = {
    drawer: {
        zIndex: 100,
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    appBar: {
        zIndex: 2000,
        backgroundColor: '#00384f',
        position: 'fixed'
    },
    main: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
    }
};

class App extends Component {
    selectMeeting(targetMeeting) {
        const { onFetchNotes, onSelectMeeting } = this.props;
        onSelectMeeting(targetMeeting);
        onFetchNotes(targetMeeting.id);
    }

    render() {
        const { selectedMeeting } = this.props;
        return (
            <MuiThemeProvider>
                <div className={styles.root}>
                    <AppBar title="Meetings" style={styles.appBar} showMenuIconButton={false} />
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: styles.drawerPaper
                        }}
                        anchor="left"
                    >
                        <Toolbar />
                        <Switch>
                            <Route
                                path="/meetings"
                                render={props => (
                                    <MeetingsList
                                        {...props}
                                        onSelectMeeting={targetMeeting =>
                                            this.selectMeeting(targetMeeting)
                                        }
                                    />
                                )}
                            />
                            <Redirect to="/meetings" />
                        </Switch>
                    </Drawer>
                    <main
                        className={styles.main}
                        style={{
                            width: `calc(100% - ${drawerWidth}px)`,
                            paddingLeft: `${drawerWidth}px`
                        }}
                    >
                        <MeetingDetail key={selectedMeeting} />
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    onSelectMeeting: PropTypes.func.isRequired,
    onFetchNotes: PropTypes.func.isRequired,
    selectedMeeting: PropTypes.instanceOf(Meeting)
};

App.defaultProps = {
    selectedMeeting: null
};

function mapStateToProps(state) {
    return {
        selectedMeeting: getSelectedMeeting(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchNotes: meetingId => dispatch(fetchNotes(meetingId)),
        onSelectMeeting: meeting => dispatch(selectMeeting(meeting))
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
