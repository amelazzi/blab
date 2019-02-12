import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { dark, lightGray, purple} from '../../../../../styles/utilities/Colors'

const StyledSideBar = styled.div`
    width: 8rem;
    padding: 15.5rem 0;
    -webkit-box-shadow: 0 0 10px 0px ${lightGray};
    display: flex;
    nav {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    a {
        color: ${dark};
        text-decoration: none;
        margin-bottom: 2rem;
        padding: 0 2.1rem;
        &:hover{
            color: ${purple};
            border-right: 3px solid ${purple};
        }
    }
`;


const SideBar = () => {
    return(
        <StyledSideBar>
            <nav>
                <Link to="/account/dashboard"> 
                    <img src={require("../../../../../pictures/book.png")}/>
                </Link>
                <Link to="/account/my-class">
                    <img src={require("../../../../../pictures/book.png")}/>
                </Link>
                <Link to="/account/blabber"> 
                    <img src={require("../../../../../pictures/book.png")}/>
                </Link>
                <Link to="/account/find-blabber"> 
                    <img src={require("../../../../../pictures/book.png")}/>
                </Link>
                <Link to="/"> 
                    <img src={require("../../../../../pictures/book.png")}/>
                </Link>
                <Link to="/account/notification"> 
                    <img src={require("../../../../../pictures/book.png")}/>
                </Link>
                <Link to="/account/student-request">
                    <img src={require("../../../../../pictures/book.png")}/>
                </Link>
            </nav>  
        </StyledSideBar>
    );
};

export default SideBar;