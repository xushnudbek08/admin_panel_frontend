import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import Login from '../pages/Login';
import { useAuth } from '../hooks/useAuth';

const AppRoutes: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" render={() => (
                    isAuthenticated ? <Dashboard /> : <Redirect to="/login" />
                )} />
                <Route path="/orders" render={() => (
                    isAuthenticated ? <Orders /> : <Redirect to="/login" />
                )} />
                <Redirect from="/" to="/dashboard" />
            </Switch>
        </Router>
    );
};

export default AppRoutes;