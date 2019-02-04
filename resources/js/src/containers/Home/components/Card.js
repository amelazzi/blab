import React from 'react';
import styled from 'styled-components';
import { dark, darkGray } from '../../../styles/utilities/Colors';

const StyledCard = styled.div`
    background: white;
    border: 1px solid ${dark};
    width: 345px;
    padding: 24px;
    text-align: center;
    img{
        width: 80%;
    }
    h1{
        padding: 16px;
        padding-left: 0;
        padding-right: 0;
        font-weight: bold;
        font-size: 2.8rem;
    }
    p{
        padding: 16px;
        padding-top: 0;
        padding-bottom: 0;
        color: ${darkGray};
        font-size: 2.2rem;
        line-height: 1.3;
    }
`;

const Card = ({icon, title, text}) => {
    return (
        <StyledCard>
            <img src={icon}/>
            <h1> {title} </h1>
            <p> {text} </p>
        </StyledCard>
    );
};

export default Card;
