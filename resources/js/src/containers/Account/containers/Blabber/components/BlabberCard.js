import React, { Component } from 'react';
import styled from 'styled-components';
import { gray, purple, lightGray, pink, light } from '../../../../../styles/utilities/Colors';


const StyledCard = styled.div`
    background: white;
    padding: 0 0 8rem 0;
    margin: 2rem;
    text-align: center;
    width: 260px;
    box-shadow: 3px 3px ${light};
    h1, h2, p{
        padding: 0.25rem;
    }
    h1{
        margin-top: 2rem;
        font-size: 1.8rem;
    }
    h2{
        font-size: 1.6rem;
        color: ${lightGray}
    }
    p{
        font-size: 1.4rem;
        color: ${lightGray}
    }
`;

const ImgContainer = styled.div`
    width: 50%;
    padding: 2rem;
    margin-left: 25%;
    img{
        width: 100%;
        border-radius: 50%;
    }
`;

const Rates = styled.div`
    width: 35%;
    margin-left: 32.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StarContainer = styled.div`
    width: 20%;
    margin: 0.125rem;
    img{
        width: 100%;
    }
`;


const BlabberCard = ({blabberName, classNbr, starNbr}) => {
    return (
        <StyledCard>
            <ImgContainer>
                <img src={require("../../../../../pictures/profile.png")} />
            </ImgContainer>
            <h1> {blabberName} </h1>
            <h2> Completed Classes : {classNbr} </h2>
            <Rates>
                <StarContainer> 
                    <img src={require("../../../../../pictures/ratedstar.png")} /> 
                </StarContainer>
                <StarContainer> 
                    <img src={require("../../../../../pictures/ratedstar.png")} /> 
                </StarContainer>
                <StarContainer> 
                    <img src={require("../../../../../pictures/ratedstar.png")} /> 
                </StarContainer>
                <StarContainer> 
                    <img src={require("../../../../../pictures/ratedstar.png")} /> 
                </StarContainer>
                <StarContainer> 
                    <img src={require("../../../../../pictures/star-2.png")} /> 
                </StarContainer>
            </Rates>
        </StyledCard>
    );
};

export default BlabberCard;
