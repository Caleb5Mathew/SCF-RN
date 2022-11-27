import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { LoginPage } from '../LoginPage/LoginPage';
import { RegisterPage } from '../RegisterPage/';
import {HelpPage} from '../HelpPage/HelpPage'
import { MissionPage } from '../MissionPage/MissionPage'

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={LoginPage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/mission" component={MissionPage} />
                                <Route path="/help" component={HelpPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>

        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };