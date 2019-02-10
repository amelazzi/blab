import React from 'react';
import styled from 'styled-components'
import { Link, Route, Switch } from 'react-router-dom';


import SideBar from './components/SideBar'
import Dashboard from './containers/Dashboard/index';
import MyClass from './containers/Class/index';
import Blabber from './containers/Blabber';

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
                    <Link to="/"> Notification 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                </nav>  
            </SideBar>  

            <Switch>
                <Route path="/account" exact component={Dashboard} />
                <Route path="/account/my-class" component={MyClass} />
                <Route path="/account/blabber" component={Blabber} />
            </Switch>
        </StyledAccount>
    );
};

export default Account;
