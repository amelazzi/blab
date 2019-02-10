import React from 'react';
import styled from 'styled-components'
import { Link, Route, Switch } from 'react-router-dom';


import SideBar from './components/SideBar'
import Dashboard from './containers/Dashboard';
import MyClass from './containers/Class';
import Blabber from './containers/Blabber';
import Notification from './containers/Notification'

const StyledAccount  = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
`;

const Account = () => {
    return (
        <StyledAccount> 
            <SideBar>
                <nav>
                    <Link to="/account"> Dashboard 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/account/my-class"> My Class 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/account/blabber"> Blabber 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/"> Find a Blabber 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/"> Message 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/account/notification"> Notification 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                </nav>  
            </SideBar>  

            <Switch>
                <Route path="/account" exact component={Dashboard} />
                <Route path="/account/my-class" component={MyClass} />
                <Route path="/account/blabber" component={Blabber} />
                <Route path="/account/notification" component={Notification} />
            </Switch>
        </StyledAccount>
    );
};

export default Account;
