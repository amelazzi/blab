
import React from 'react'
import styled from 'styled-components'
import {purple, dark, darkPurple} from '../../../styles/utilities/Colors'

const StyledSidBar = styled.div`
    background: ${purple};
    z-index: 2;
    width: 34rem;
    &,
    *{
        box-sizing: border-box;
    }
    padding:  12rem 0rem;
    box-shadow: 5px 0 5px -5px ${dark};
    font-size: 2.5rem;
    display: flex;
    nav {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    a {
        color: white;
        position: relative;
        text-decoration: none;
        padding: 1.5rem 2.5rem;
        margin-bottom: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        :hover{
            background: ${darkPurple};
        }
    }
`;


const SideBar = ({children}) => {
    return (
        <StyledSidBar>
            {children}
        </StyledSidBar>
    );
};

export default SideBar;