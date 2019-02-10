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


const BlabberCard = ({blabberName, classNbr}) => {
    return (
        <StyledCard>
            <ImgContainer>
                <img src={require("../../../../../pictures/profile.png")} />
            </ImgContainer>
            <h1> {blabberName} </h1>
            <h2> Completed Classes : {classNbr} </h2>
        </StyledCard>
    );
};

export default BlabberCard;
