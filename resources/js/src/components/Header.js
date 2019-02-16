import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darkGray, light, pink, purple } from '../styles/utilities';

const StyledHeader = styled.header`
    background: ${darkGray};
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
    * {
        margin: 0;
    }

    nav {
        width: 79%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        padding: 2.5rem;
        align-items: center;
    }

    a {
        color: white;
        padding: 0 2rem;
        position: relative;
        text-decoration: none;

        &:hover,
        &:focus,
        &.active {
            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: -4px;
                left: calc(3.4rem / 2);
                width: calc(100% - 3.2rem);
                height: 0.5rem;
                background: ${pink};
                border-radius: 1rem;
            }
        }
    }
`;

const StyledLogo = styled.div`
    flex: 1;
    a {
        font-weight: bolder;
        font-size: 2rem;
        &:after {
            display: none !important;
        }
    }
`;

const StyledLogIn = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    background: ${purple};
    width: 20.5%;
    padding: 2.5rem;
    font-weight: bold;
`;

const LogIn = styled(Link)`
    :after {
        background: white !important;
    }
`;

const StyledLink = styled.div`
    background: ${darkGray};
    border-radius: 8px;
`;

const SignIn = styled(Link)`
    :after {
        bottom: -16px !important;
        background: white !important;
    }
`;

const Header = () => (
    <StyledHeader>
        <nav>
            <StyledLogo>
                <Link to="/">Blab</Link>
            </StyledLogo>
            <Link to="/"> Home </Link>
            <Link to="/getting-started"> Getting Started </Link>
            <Link to="/forum"> Forum </Link>
            <Link to="/contact-us"> Contact us </Link>
            <Link to="/account"> Account </Link>
            <Link to="/student-profil"> StProfil </Link>
            <Link to="/tutor-profil"> TuProfil </Link>
            <Link to="/live"> Live </Link>
        </nav>
        <StyledLogIn>
            <LogIn to="/log-in"> Log in </LogIn>
            <StyledLink>
                <SignIn to="/sign-up"> Sign up </SignIn>
            </StyledLink>
        </StyledLogIn>
    </StyledHeader>
);

export default Header;
