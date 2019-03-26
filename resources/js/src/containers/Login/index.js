import React from 'react';

import styled from 'styled-components';
import { purple, gray, dark } from '../../styles/utilities';
import { Link } from 'react-router-dom';

const StyledLogin = styled.div`
    background: white;
    padding: 8rem;
    text-align: center;
    h1 {
        padding: 2rem;
        font-size: 6rem;
        color: ${purple};
        font-weight: bold;
    }
    h2 {
        color: ${gray};
        font-size: 2.5rem;
    }
    form {
        width: 50%;
        margin-left: 25%;
        padding: 4.5rem;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
    }
    input[type='submit'] {
        border: none;
        padding: 1rem;
        background: ${purple};
        color: white;
        font-size: 3rem;
        font-weight: bold;
    }
`;

const FButton = styled.a`
    text-decoration: none !important;
    background: #3a559f;
    color: white !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    font-size: 2.4rem;
    padding-right: 4rem;
    margin: 2rem;
`;

const IconContainer = styled.div`
    width: 5.2rem;
    height: 5.8rem;
    background: transparent;
    border-radius: 0;
    /* box-shadow: 5px 0 5px -5px #333; */
    margin: 0 !important;
    padding: 1rem !important;
    img {
        border-radius: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        outline: none !important;
        background: white;
    }
`;

const GButton = styled(FButton)`
    background: white;
    color: ${dark}!important;

    margin-top: 0;
    padding-right: 5rem;
    border: 2px solid ${dark};
`;

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 20%;
    margin-top: 2rem;
    h3 {
        color: ${dark};
        font-size: 2.3rem;
    }
`;

const StyledSignUp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledH3 = styled.h3`
    color: ${purple} !important;
`;

const StyledLink = styled(Link)`
    color: ${purple};
    font-size: 2.3rem;
    margin-left: 4px;
`;

const Login = () => {
    return (
        <StyledLogin>
            <h1> Login </h1>
            <h2> Welcome back! login to access your account </h2>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Sign In" />
                <FButton href="/redirect/facebook">
                    <IconContainer>
                        <img src={require('../../pictures/facebook.png')} />
                    </IconContainer>
                    Continue with Facebook
                </FButton>
                <GButton href="/redirect/google">
                    <IconContainer>
                        <img src={require('../../pictures/google.png')} />
                    </IconContainer>
                    Continue with Google
                </GButton>
            </form>
            <StyledFooter>
                <StyledH3> forgot your password? </StyledH3>
                <StyledSignUp>
                    <h3> Don't have an account?</h3>
                    <StyledLink to="/sign-up"> Sign Up </StyledLink>
                </StyledSignUp>
            </StyledFooter>
        </StyledLogin>
    );
};

export default Login;
