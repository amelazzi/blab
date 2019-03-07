import React from 'react'
import styled from 'styled-components'

import { dark } from '../../../../../../../styles/utilities/Colors'

const ImgContainer = styled.div`
    width: 24rem;
    height: 24rem;
    margin-top: 3rem;
    margin-bottom: 1.3rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover
    }
`;

const ProfilContent = styled.div`
    margin: 2rem 6rem;
    text-align: center;
    h1{
        margin-top: 1rem !important;
        font-size: 2.8rem !important;
        font-weight: bold;
    }
`;

const RatesContent = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
    margin: auto;
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

const ProfileInfo = ({profilePic, tutorName}) => {
    return(
        <ProfilContent>    
            <ImgContainer>
                <img src={profilePic} />
            </ImgContainer>
            <h1> {tutorName} </h1>
            <RatesContent>
                <p> 4.0 </p>
                <StarContainer>
                    <img src={require("../../../../../../../pictures/ratedstar.png")} />
                    <img src={require("../../../../../../../pictures/ratedstar.png")} />
                    <img src={require("../../../../../../../pictures/ratedstar.png")} />
                    <img src={require("../../../../../../../pictures/star-2.png")} /> 
                </StarContainer>
            </RatesContent>
        </ProfilContent>
    );
};

export default ProfileInfo;