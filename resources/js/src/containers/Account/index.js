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
import TutorClass from './containers/TutorClass';
import ClassIinfo from './containers/TutorClass/components/classInfo/ClassInfo';


const StyledAccount  = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    align-content: center;
`;

const StyledIcon = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Account = () => {
    return (
        <StyledAccount> 
            <SideBar>
                <nav>
                    <Link to="/account/dashboard"> Dashboard 
                        <StyledIcon>
                            <img src={require("../../pictures/sideBar/dashboard.png")}/>
                        </StyledIcon>
                    </Link>
                    <Link to="/account/my-class"> My Class 
                        <StyledIcon>
                            <img src={require("../../pictures/sideBar/book.png")}/>
                        </StyledIcon>
                    </Link>
                    <Link to="/account/tutor-class"> Tutor Class 
                        <StyledIcon>
                            <img src={require("../../pictures/sideBar/professor.png")}/>
                        </StyledIcon>
                    </Link>
                    <Link to="/account/blabber"> Blabber 
                        <StyledIcon>
                            <img src={require("../../pictures/sideBar/question.png")}/>
                        </StyledIcon>
                    </Link>
                    <Link to="/account/find-blabber"> Find a Blabber 
                        <StyledIcon>
                            <img src={require("../../pictures/sideBar/dashboard.png")}/>
                        </StyledIcon>
                    </Link>
                    <Link to="/account/message"> Message 
                        <StyledIcon>
                            <img src={require("../../pictures/sideBar/email.png")}/>
                        </StyledIcon>
                    </Link>
                    <Link to="/account/notification"> Notification 
                        <StyledIcon>
                            <img src={require("../../pictures/sideBar/notification.png")}/>
                        </StyledIcon>
                    </Link>
                    <Link to="/account/student-request"> Student Request 
                        <StyledIcon>
                            <img src={require("../../pictures/sideBar/dashboard.png")}/>
                        </StyledIcon>
                    </Link>
                </nav>  
            </SideBar>  

            <Switch>
                <Route exact path="/account/" component={Dashboard} />
                <Route path="/account/my-class" component={MyClass} />
                <Route path="/account/tutor-class" component={TutorClass} />
                <Route path="/account/blabber" component={Blabber} />
                <Route path="/account/find-blabber" component={FindBlabber} />
                <Route path="/account/notification" component={Notification} />
                <Route path="/account/student-request" component={StudentRequest} />
                <Route path="/account/message" component={Message} />
                <Route path="/account/class-info" component={ClassIinfo} />

            </Switch>
        </StyledAccount>
    );
};

export default Account;
