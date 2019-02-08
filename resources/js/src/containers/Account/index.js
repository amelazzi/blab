import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SideBar from './components/SideBar';
import Courses from './containers/Courses';
import Notifications from './containers/Notifications';
import Dashboard from './containers/Dashboard';

class Account extends Component {
    render() {
        return (
            <>
                <SideBar>
                    <li>
                        <Link to="/account">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/account/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/account/notifications">Notifications</Link>
                    </li>
                    {/* ... */}
                </SideBar>

                <Switch>
                    <Route path="/account" exact component={Dashboard} />
                </Switch>
                <Switch>
                    <Route path="/account/courses" component={Courses} />
                </Switch>
                <Switch>
                    <Route
                        path="/account/notifications"
                        component={Notifications}
                    />
                </Switch>
                {/* ... */}
            </>
        );
    }
}

export default Account;
