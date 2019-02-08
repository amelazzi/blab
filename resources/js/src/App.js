import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
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
import StartedHead from './components/StartedHead';
import Account from './containers/Account';

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
                    <Route path="/about" component={About} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/log-in" component={Login} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-up2" component={SignUp2} />
                    <Route path="/congrats" component={Congrats} />
                    <Route path="/getting-started" component={GettingStarted} />
                    <Route path="/getting-started-student" component={StartedStudent} />
                    <Route path="/getting-started-tutor" component={StartedTutor} />
                    <Route path="/account" component={Account} />
                    <Footer />
                    <GlobalStyle />
                </StyledContainer>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
