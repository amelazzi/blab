import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Card from './components/Card'
import { lightGray } from '../../styles/utilities/Colors'

const StyledGetStarted = styled.div`
    background: white;
    padding: 6rem;
    text-align: center;
    h1{
        font-size: 5rem;
    }
    h2{
        font-size: 3.5rem;
        color: ${lightGray};
        font-weight: 200;
    }

`;

const Cards = styled.div`
    padding: 5rem;
    width: 75%;
    margin-left: 12.5%;
    display: flex;
    justify-content: space-between
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    :hover{
        text-decoration: none;
    }
`;

const GettingStarted = () => {
    return (
        <StyledGetStarted>
            <h1> Cool! you have taken your first step. </h1>
            <h2> Select your status </h2>
            <Cards>
                <StyledLink to="/sign-up2"> 
                    <Card icon={require("../../pictures/student.png")}
                        type="Students"></Card> 
                </StyledLink>
                <StyledLink to="/sign-up2">
                    <Card icon={require("../../pictures/student.png")}
                        type="Tutors"></Card>
                </StyledLink>
            </Cards>  
        </StyledGetStarted>
    );
};

export default GettingStarted;
