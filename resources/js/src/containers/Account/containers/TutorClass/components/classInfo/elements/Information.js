import React from 'react'
import styled from 'styled-components'

import {dark, purple} from '../../../../../../../styles/utilities/Colors'

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const ImgContainer = styled.div`
    width: 30.4rem;
    height: 20.4rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2.7rem;
    margin-top: 1.3rem;
    h1{
        font-size: 3.7rem;
    }
    small{
        color: ${purple};
        font-size: 2rem;
        margin-top: 3rem;
    }
`;

const RatesContent = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    p{
        color: ${dark};
        font-size: 2.1rem !important;
        font-weight: 600 !important;
        margin:0 !important;
        padding:0 !important;
    }
`;


const StarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1.8rem;
    img{
        width: 2rem;
        height: 2rem;
        margin: 0.125rem;
    }
`;

const Information = () => {
    return(
        <InfoContainer>
            <ImgContainer>
                <img src={require("../../../../../../../pictures/lifestyle.png")} />
            </ImgContainer>
            <ContentContainer>
                <h1> OnBoard Study </h1>
                <RatesContent>
                    <p> 4.0 </p>
                    <StarContainer>
                        <img src={require("../../../../../../../pictures/ratedstar.png")} />
                        <img src={require("../../../../../../../pictures/ratedstar.png")} />
                        <img src={require("../../../../../../../pictures/ratedstar.png")} />
                        <img src={require("../../../../../../../pictures/star-2.png")} /> 
                    </StarContainer>
                </RatesContent>
                <small> Change image </small>
            </ContentContainer>
        </InfoContainer>
    );
};

export default Information;