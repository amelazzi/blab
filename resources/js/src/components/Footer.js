import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darkGray, light, pink } from '../styles/utilities';

const StyledFooter = styled.footer`
    background: ${darkGray};
    font-size: 1.8rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: center;
    padding: 3.2rem;

    * {
        margin: 0;
    }
`;

const StyledLogo = styled.div`
    a {
        color: ${light};
        padding: 0 2rem;
        text-decoration: none;

        font-weight: bolder;
        font-size: 2rem;
    }
`;
const Copyrights = styled.div`
    flex: 1;

    p {
        color: ${light};
    }
`;
const Footer = () => (
    <StyledFooter>
        <Copyrights>
            <p>Copyrights &copy;2019 All rights reserved.</p>
        </Copyrights>
        <StyledLogo>
            <Link to="/">Blab</Link>
        </StyledLogo>
    </StyledFooter>
);

export default Footer;
