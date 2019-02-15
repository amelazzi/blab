import React, { Component } from 'react';
import styled from 'styled-components';
import { gray, purple, lightGray, pink, light } from '../../../../../styles/utilities/Colors';


const StyledCard = styled.div`
    background: white;
    margin: 2rem;
    text-align: center;
    width: 260px;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.11);
    h1, h2, p{
        padding: 0.25rem;
    }
    h1{
        margin-top: 2rem;
        font-size: 1.8rem;
    }
    h2{
        font-size: 1.6rem;
        color: ${purple}
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

const Footer = styled.div`
    width: 25%;
    height: 6rem;
    margin-left: 75%;
    margin-top: 4rem;
    border-top-left-radius: 32px;
    background: ${pink};
`;

const ClassCard = ({blabberName, className, timeLeft}) => {
    return (
        <StyledCard>
            <ImgContainer>
                <img src={require("../../../../../pictures/profile.png")} />
            </ImgContainer>
            <h1> {blabberName} </h1>
            <h2> {className} </h2>
            <p> Next Class: {timeLeft} </p>
            <Footer></Footer>
        </StyledCard>
    );
};

export default ClassCard;
