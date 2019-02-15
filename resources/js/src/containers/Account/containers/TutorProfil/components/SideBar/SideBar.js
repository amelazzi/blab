import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import {purple, light, dark, gray} from '../../../../../../styles/utilities/Colors'

import ProfileInfo from './elements/ProfileInfo'
import Languages from './elements/Languages'
import About from './elements/About'
import Education from './elements/Education'
import Interests from './elements/Interests'


const StyledSidBar = styled.div`
    background: white;
    width: 36rem;
    padding: 3rem 0;
    border-right: 1px solid ${light};
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    p{
        color: ${dark};
        font-size: 2rem;
        font-weight: 300;
        line-height: 1.2;
        padding: 0;
        margin: 0;
        margin-top: 2rem;
    }
`;

const StyledLink = styled(Link)`
    color: ${purple};
    padding: 0 5rem;
    font-size: 2rem;
    :hover{
        text-decoration: none;
        color: ${purple};
        cursor: pointer;
    }
`;


const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2.5rem;
`;

const MsgBtn = styled.button`
    width: 45%;
    border: none;
    border-radius: 6px;
    background: ${purple};
    color: white;
    font-size: 1.8rem;
    padding: 0.4rem;
`;

const BookingBtn = styled(MsgBtn)`
    border: 1px solid ${gray};
    background: white;
    color: ${dark};
`;

const Divider = styled.div`
    width: 100%;
    border-bottom: 1px solid ${light};
    margin: 1rem 0;
`;


const SideBar = () => {
    return(
        <StyledSidBar>
            <StyledLink to='/account'> Dashboard </StyledLink>
            <ProfileInfo/>
            <ButtonContainer>
                <MsgBtn>Send Message</MsgBtn>
                <BookingBtn>Booking</BookingBtn>
            </ButtonContainer>
            <Divider/>
                <Languages/>
            <Divider/>
                <About/>
            <Divider/>
                <Education/>
            <Divider/>
                <Interests/>
        </StyledSidBar>
    );
};

export default SideBar;