import { AppBar, MuiThemeProvider } from 'material-ui';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { MeetingsList } from './containers';

const styles = {
    appBar: {
        backgroundColor: '#00384f'
    }
};

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Meetings" style={styles.appBar} showMenuIconButton={false} />

                    <Switch>
                        <Route path="/meetings" component={MeetingsList} />
                        <Redirect to="/meetings" />
                    </Switch>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withRouter(connect()(App));
