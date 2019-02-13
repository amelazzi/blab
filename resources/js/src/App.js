import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import ContactUs from './containers/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import SignUp2 from './containers/SignUp-2';
import Congrats from './containers/Congrats';
import GettingStarted from './containers/GettingStarted';
import StartedStudent from './containers/StartedStudent';
import StartedTutor from './containers/StartedTutor';
import Account from './containers/Account';
import Profil from './containers/Account/containers/Profil';
import LiveClass from './containers/Account/containers/LiveClass'


const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-flow: column nowrap;
    min-height: 100vh;
`;

class App extends Component {
    render() {
        return (
            <Router>
                <StyledContainer>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/getting-started" component={GettingStarted} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/account" component={Account} />
                    <Route path="/profil" component={Profil} />
                    <Route path="/log-in" component={Login} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-up2" component={SignUp2} />
                    <Route path="/congrats" component={Congrats} />
                    <Route path="/live" component={LiveClass} />
                    <Route path="/getting-started-student" component={StartedStudent} />
                    <Route path="/getting-started-tutor" component={StartedTutor} />
                    <Footer />
                    <GlobalStyle />
                </StyledContainer>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
