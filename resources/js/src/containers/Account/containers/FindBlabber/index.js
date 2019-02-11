import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RequestDetails from './containers/RequestDetails'
import Proceed from './containers/proceed'


const FindBlabber = () => {
    return (
        <>
            <Switch>
                <Route exact path="/account/find-blabber" component={RequestDetails} />
                <Route path="/account/find-blabber/proceed" component={Proceed} />
            </Switch>
        </>
    );
};

export default FindBlabber;

