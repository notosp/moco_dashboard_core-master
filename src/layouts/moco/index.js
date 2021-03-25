import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import store from '../../stores';

import './index.scss';

// pages
const SecurePage = React.lazy(() => import('./SecureLayout'));
const Login = React.lazy(() => import('../../views/pages/Login'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const ProtectedRoute = () => {
    const { auth = {} } = store.getState();

    return (
        <Route
            render={props => auth.username
                ? <SecurePage {...props} />
                : <Redirect to={{ pathname: "/login" }} />}
        />
    )
};

class App extends Component {
    render() {
        return (
            <Router>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
                        <ProtectedRoute path="/" render={props => <SecurePage {...props} />} />
                    </Switch>
                </React.Suspense>
            </Router>
        );
    }
}

export default App;
