import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import { dark, darkGray, purple } from '../../../styles/utilities/Colors';

const StyledSection = styled.div`
    margin-top: 0.5rem;  
    padding: 4.5rem 12rem 2.5rem 3rem; 
    display: flex;
    flex-direction: row;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
`;

const StyledImg = styled.div`
    margin-top: 4rem;
    padding: 8px;
    width: 50%;
    height: 52rem;
    img{
        width: 47rem;
        height: 100%;
        object-fit: cover;
    }
`;

const StyledContent = styled.div`
    width: 50%;
    padding: 16px;
    padding-right: 0;
    h1{
        margin-top: 7.5rem;
        color: ${dark};
        font-size: 3.5rem;
        font-weight: bold;
    }
    p{  
        margin: 4rem 0rem;
        color: ${darkGray};
        font-size: 2.1rem;
        line-height: normal;
    }
`;

const StyledButton = styled.button`
    border: none;
    background: ${purple};
    border-radius: 7.4rem;
    color: white;
    font-size: 1.8rem;
    padding: 1.2rem 3.8rem;
    :hover{
        cursor: pointer;
    }
`;

const Section = ({picture, title, text}) => (
    <StyledSection>
        <StyledImg>
            <img src={picture} />
        </StyledImg>
        <StyledContent>
            <h1> {title} </h1>
            <p> {text} </p>
            <Link to="/">
                <StyledButton> Getting Started </StyledButton>
            </Link>
        </StyledContent>
    </StyledSection>
);

export default Section;
