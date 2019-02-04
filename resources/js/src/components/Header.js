import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darkGray, light, pink } from '../styles/utilities';

const StyledHeader = styled.header`
    background: ${darkGray};
    font-size: 1.8rem;
    * {
        margin: 0;
    }

    nav {
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        padding: 3.2rem;
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
                bottom: 0;
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

const Header = () => (
    <StyledHeader>
        <nav>
            <StyledLogo>
                <Link to="/">Blab</Link>
            </StyledLogo>
            <Link to="/about">About</Link>
            <Link to="/contact-us">Contact us</Link>
        </nav>
    </StyledHeader>
);

export default Header;
