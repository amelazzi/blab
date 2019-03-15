import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { purple, gray } from '../../styles/utilities';

const StyledCongrats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 8rem;
    text-align: center;
    h1{
        color: ${purple};
        font-size: 5rem;
        font-weight: bold
    }
    p{
        font-size: 3.4rem;
        color: ${gray};
        padding: 3rem 8rem 3rem 8rem;
        line-height: 1.2
    }
    img{
        width: 38%;
    }
`;

const StyledLink = styled(Link)`
    border: none;
    padding-left: 16rem;
    padding-right: 16rem;
    background: ${purple};
    color: white;
    font-size: 3rem;
    margin-top: 5rem;
    :hover{
        text-decoration: none;
        color: white;
    }
`;


const Congrats = () => {
    return (
        <StyledCongrats>
            <h1> CONGRATULATIONS </h1>
            <p> First Name your account has been registred. Click on the
                link below to proceed to your dashboard
            </p>
            <img src={require("../../pictures/SignUp/congratulation.png")} />
            <StyledLink to="/"> Proceed </StyledLink>
        </StyledCongrats>
    );
};

export default Congrats;