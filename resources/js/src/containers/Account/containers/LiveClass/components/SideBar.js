import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { dark, lightGray, purple, darkPurple} from '../../../../../styles/utilities/Colors'

const StyledSideBar = styled.div`
    background: ${purple};
    width: 8rem;
    padding: 15.5rem 0;
    box-shadow: 5px 0 5px -5px ${dark};
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
        padding: 1.5rem 2rem;
        margin-bottom: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        :hover{
            background: ${darkPurple};
        }
    }
`;

const StyledIcon = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const SideBar = () => {
    return(
        <StyledSideBar>
            <nav>
                <Link to="/account/dashboard"> 
                    <StyledIcon>
                        <img src={require("../../../../../pictures/sideBar/dashboard.png")}/>
                    </StyledIcon>
                </Link>
                <Link to="/account/my-class">
                    <StyledIcon>
                        <img src={require("../../../../../pictures/sideBar/book.png")}/>
                    </StyledIcon>
                </Link>
                <Link to="/account/blabber"> 
                    <StyledIcon>
                        <img src={require("../../../../../pictures/sideBar/professor.png")}/>
                    </StyledIcon>
                </Link>
                <Link to="/account/find-blabber"> 
                    <StyledIcon>
                        <img src={require("../../../../../pictures/sideBar/question.png")}/>
                    </StyledIcon>
                </Link>
                <Link to="/"> 
                    <StyledIcon>
                        <img src={require("../../../../../pictures/sideBar/dashboard.png")}/>
                    </StyledIcon>
                </Link>
                <Link to="/account/notification"> 
                    <StyledIcon>
                        <img src={require("../../../../../pictures/sideBar/notification.png")}/>
                    </StyledIcon>
                </Link>
                <Link to="/account/student-request">
                    <StyledIcon>
                        <img src={require("../../../../../pictures/sideBar/dashboard.png")}/>
                    </StyledIcon>
                </Link>
            </nav>  
        </StyledSideBar>
    );
};

export default SideBar;