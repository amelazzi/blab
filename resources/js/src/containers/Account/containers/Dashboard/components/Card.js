import React from 'react';
import styled from 'styled-components'
import {light, green, purple, dark, pink} from '../../../../../styles/utilities/Colors'

const StyledCard  = styled.div`
    width: 100%;
    padding: 4rem 6rem;
    margin-bottom: 10rem;
    border: 1px solid ${light};
    box-shadow: 0 4px 4px 0 ${green};
    position: relative;

    text-align: center;

    color: ${dark};
    font-size: 3rem;
    font-weight: 500;
    h1{
        line-height: 1.7;
    }
    p{
        margin-top: 5rem;
        margin-bottom: 3rem;
        line-height: 1.2;
    }
`;

const Fab = styled.div`
    width: 12rem;
    height: 12rem;
    border-radius: 100%;
    background: ${props=>props.fabColor};
    position:absolute;
    top: 100%;
    left: 100%;
    transform: translate(-75%, -75%);
`;

const Card = ({title, content, fabColor}) => {
    return (
        <StyledCard> 
            <h1> {title} </h1>
            <p> {content} </p>
            <Fab fabColor={fabColor}> + </Fab>
        </StyledCard>
    );
};

export default Card;
