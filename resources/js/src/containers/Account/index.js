import React from 'react';
import styled from 'styled-components'
import { Link, Route, Switch } from 'react-router-dom';


import SideBar from './components/SideBar'
import Dashboard from './containers/Dashboard';
import MyClass from './containers/Class';
import Blabber from './containers/Blabber';
import FindBlabber from './containers/FindBlabber';
import Notification from './containers/Notification';
import StudentRequest from './containers/StudiantRequest'
import Message from './containers/Message';


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
                    <Link to="/account/dashboard"> Dashboard 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/account/my-class"> My Class 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/account/blabber"> Blabber 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/account/find-blabber"> Find a Blabber 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/account"> Message 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/account/notification"> Notification 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                    <Link to="/account/student-request"> Student Request 
                        <img src={require("../../pictures/book.png")}/>
                    </Link>
                </nav>  
            </SideBar>  

            <Switch>
                <Route path="/account/dashboard" exact component={Dashboard} />
                <Route path="/account/my-class" component={MyClass} />
                <Route path="/account/blabber" component={Blabber} />
                <Route path="/account/find-blabber" component={FindBlabber} />
                <Route path="/account" component={Message} />
                <Route path="/account/notification" component={Notification} />
                <Route path="/account/student-request" component={StudentRequest} />
            </Switch>
        </StyledAccount>
    );
};

export default Account;
