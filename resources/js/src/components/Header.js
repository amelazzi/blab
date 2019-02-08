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
        width: 79.5%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        padding: 2.5rem;
        align-items: center;
    }

    a {
        color: ${light};
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

const StyledLink = styled.div`
    background: ${darkGray};
    border-radius: 8px;
`;

const Header = () => (
    <StyledHeader>
        <nav>
            <StyledLogo>
                <Link to="/">Blab</Link>
            </StyledLogo>
            <Link to="/"> Home </Link>
            <Link to="/about"> Language </Link>
            <Link to="/getting-started"> Getting Started </Link>
            <Link to="/contact-us"> Contact us </Link>
            <Link to="/about"> Account </Link>
        </nav>
        <StyledLogIn>
            <Link to="/log-in"> Log in </Link>
            <StyledLink>
                <Link to="/sign-up"> Sign up </Link>
            </StyledLink>
        </StyledLogIn>
    </StyledHeader>
);

export default Header;
