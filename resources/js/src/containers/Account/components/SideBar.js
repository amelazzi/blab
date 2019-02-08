
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {purple, dark, lightGray} from '../../../styles/utilities/Colors'

const StyledSidBar = styled.div`
    width: 13em;
    padding:  12rem 0 0 2rem;
    -webkit-box-shadow: 0 0 10px 0px ${lightGray};
    font-size: 2.5rem;
    display: flex;
    nav {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    a {
        color: ${dark};
        position: relative;
        text-decoration: none;
        padding: 1rem;
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:hover{
            color: ${purple};
            border-right: 3px solid ${purple}
        }
    }
    img{
        padding-right: 1rem;
    }
`;


const SidBar = ({children}) => {
    return (
        <StyledSidBar>
            {children}
        </StyledSidBar>
    );
};

export default SidBar;