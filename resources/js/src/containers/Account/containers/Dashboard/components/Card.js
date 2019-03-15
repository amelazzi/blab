import React from 'react';
import styled from 'styled-components'
import {light, dark} from '../../../../../styles/utilities/Colors'


const StyledCard  = styled.div`
    width: 100%;
    padding: 4rem 6rem;
    margin-bottom: 10rem;
    border: 1px solid ${light};
    box-shadow: 0 4px 4px 0 ${props=>props.boxColor};
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

    padding: 2.5rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Card = ({title, content, boxColor, fabColor}) => {
    return (
        <StyledCard boxColor={boxColor}> 
            <h1> {title} </h1>
            <p> {content} </p>
            <Fab fabColor={fabColor}>
                <img src={require("../../../../../pictures/plus.png")}/>
            </Fab>
        </StyledCard>
    );
};

export default Card;
