import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import ContactUs from './containers/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';
import Stripe from './components/Stripe';
import styled from 'styled-components';
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
                {/* <StyledContainer>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Footer />
                    <GlobalStyle />
                </StyledContainer> */}
                <Stripe />
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
