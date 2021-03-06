import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Card from './components/Card'
import { gray } from '../../styles/utilities/Colors'

const StyledGetStarted = styled.div`
    background: white;
    padding: 6rem;
    text-align: center;
    h1{
        font-size: 5rem;
    }
    h2{
        font-size: 3.5rem;
        color: ${gray};
        font-weight: 200;
    }

`;

const Cards = styled.div`
    padding: 5rem;
    width: 75%;
    margin-left: 12.5%;
    display: flex;
    justify-content: space-between;
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
                <StyledLink to="/getting-started-student"> 
                    <Card icon={require("../../pictures/gettingStarted/graduation.png")}
                        type="Students"></Card> 
                </StyledLink>
                <StyledLink to="/getting-started-tutor">
                    <Card icon={require("../../pictures/gettingStarted/teacher.png")}
                        type="Tutors"></Card>
                </StyledLink>
            </Cards>  
        </StyledGetStarted>
    );
};

export default GettingStarted;
