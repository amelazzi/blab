import React from 'react';
import styled from 'styled-components';
import { dark, darkGray } from '../../../styles/utilities/Colors';

const StyledCard = styled.div`
    background: white;
    width: 31rem;
    text-align: center;
    p{
        color: ${darkGray};
        font-size: 2.1rem;
        line-height: normal;
        margin-top: 6rem;
    }
`;

const IconContainer = styled.div`
    width: 16.2rem;
    height: 16.2rem;
    margin: auto;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Card = ({icon, text}) => {
    return (
        <StyledCard>
            <IconContainer>
                <img src={icon}/>
            </IconContainer>
            <p> {text} </p>
        </StyledCard>
    );
};

export default Card;
