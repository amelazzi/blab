import React from 'react';
import styled from 'styled-components'
import { Link, Route, Switch } from 'react-router-dom';


import SidBar from './components/SideBar'
import Dashboard from './containers/Dashboard/Dashboard';

const StyledAccount  = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Account = () => {
    return (
        <StyledAccount> 
            <SidBar>
                <nav>
                    <Link to="/account"> Dashboard 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/account/courses"> My Class 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/"> Blabber 
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
            </SidBar>  

            <Switch>
                <Route path="/account" exact component={Dashboard} />
            </Switch>
        </StyledAccount>
    );
};

export default Account;
