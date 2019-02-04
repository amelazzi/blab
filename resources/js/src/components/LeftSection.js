import React from 'react';
import styled from 'styled-components';
import { dark, lightGray, blue } from '../styles/utilities/Colors';

const StyledSection = styled.div`
    background: white;    
    padding: 7rem;
    display: flex;
    flex-direction: row;
    img{
        width: 100%;
    }
`;

const StyledImg = styled.div`
    margin-top: 4rem;
    padding: 8px;
    width: 50%;
`;

const StyledContent = styled.div`
    width: 50%;
    padding: 16px;
    padding-right: 0;
    h1{
        margin-top: 8rem;
        margin-bottom: 16px;
        color: ${dark};
        font-size: 4.5rem;
        font-weight: bold
    }
    p{  
        width:90%
        margin-bottom: 16px;
        margin-left: 8px;
        color: ${lightGray};
        font-size: 2.8rem;
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