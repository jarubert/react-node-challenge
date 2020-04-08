import { AppBar, MuiThemeProvider, Drawer, Toolbar } from 'material-ui';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { MeetingsList, MeetingDetail } from './containers';

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
        backgroundColor: '#00384f'
    },
    main: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
    }
};

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className={styles.root}>
                    <AppBar
                        position="fixed"
                        title="Meetings"
                        style={styles.appBar}
                        showMenuIconButton={false}
                    />
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: styles.drawerPaper
                        }}
                        anchor="left"
                    >
                        <Toolbar />
                        <Switch>
                            <Route path="/meetings" component={MeetingsList} />
                            <Redirect to="/meetings" />
                        </Switch>
                    </Drawer>
                    <main
                        className={styles.main}
                        style={{
                            marginLeft: `${drawerWidth + 15}px`,
                            width: `calc(100% - ${drawerWidth}px)`
                        }}
                    >
                        <MeetingDetail />
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withRouter(connect()(App));
