import React from 'react';
import styled from 'styled-components';
import { dark } from '../styles/utilities/Colors';

const StyledSection = styled.div` 
    padding: 1rem 8rem;
    display: flex;
    flex-direction: row;
    align-items: center;  
`;

const StyledImg = styled.div`
    width: 50%;
    margin-left: 10%;
    img{
        width: 100%;
        object-fit: cover;
    }
`;

const StyledContent = styled.div`
    width: 40%;
    color: ${dark};
    h1{
        margin-top: 8rem;
        margin-bottom: 16px;
        font-size: 4.2rem;
        font-weight: bold;
    }
    p{  
        margin-top: 3rem;
        font-size: 3rem;
        line-height: 1.2;
    }
`;

const LeftSection = ({title, text, picture}) => (
    <StyledSection>
        <StyledContent>
            <h1> {title} </h1>
            <p> {text} </p>
        </StyledContent>
        <StyledImg>
            <img src={picture} />
        </StyledImg>
    </StyledSection>
);

export default LeftSection;
