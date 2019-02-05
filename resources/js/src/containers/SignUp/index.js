import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { gray, lightGray } from '../../styles/utilities';

import Card from './components/Card'

const StyledSignUp = styled.div`
    background: white;
    padding: 6rem;
    h2{
        text-align: center;
        color: ${lightGray};
        font-size: 3rem;
    }

    h3{
        width: 70%;
        margin-left: 15%;
        padding: 2rem;
        text-align: center;
        color: ${gray};
        font-size: 2.5rem;
    }
`;

const MainTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledH1 = styled.h1`
    color: ${props => props.theme.main};
    font-size: 6rem;
    padding: 3rem 3rem 0 0;
    font-weight: bold;
`;

const theme = {
    main: "${dark}"
}

const Cards = styled.div`
    padding: 3rem;
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

const SignUp = () => {
    return (
        <StyledSignUp>
            <h2> Step 1 of 3 </h2>
            <MainTitle theme={theme}>
                <StyledH1 theme={{ main: "#4D70F4" }} >SELECT</StyledH1>
                <StyledH1> YOUR MODE </StyledH1>
            </MainTitle>
            <h3> Are you registrating as a Student? or a Tutor? select 
                your choice in the screen below.   
            </h3>
            <Cards>
                <StyledLink to="/"> 
                    <Card icon={require("../../pictures/student.png")} 
                        title="Blabee" 
                        type="Student"></Card> 
                </StyledLink>
                <StyledLink to="/">
                    <Card icon={require("../../pictures/student.png")} 
                        title="Blabber" 
                        type="Tutor"></Card>
                </StyledLink>
            </Cards>
        </StyledSignUp>
    );
};

export default SignUp;
