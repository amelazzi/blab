import React from 'react'
import styled from 'styled-components'
import { orange, dark, lightGray } from '../../../../../styles/utilities/Colors';


const StyledReview = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-top: 2rem;
    border-bottom: 1px solid ${lightGray};
`;

const ImgContainer = styled.div`
    width: 6rem;
    height: 6rem;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    p, small{
        margin-left: 2rem;
        font-weight: 300;
    }
    p{
        color: ${dark};
        font-size: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    small{
        color: ${lightGray};
        font-size: 1.8rem;
    }
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    h2{
        font-size: 2.4rem;
        margin-left: 2rem;
    }
    p{
        color: ${orange};
        font-size: 2.4rem;
        margin: 0 !important;
        margin-left: 2rem !important;
    }
`;

const StarContainer = styled.div`
    width: 3rem;
    height: 3rem;
    margin-left: 2rem;
    margin-top: -0.5rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Review = () => {
    return(
        <StyledReview>
            <ImgContainer>
                <img src={require("../../../../../pictures/profile.png")} />
            </ImgContainer>
            <Content>
                <ProfileInfo>
                    <h2> Allison Moray </h2>
                    <StarContainer>
                        <img src={require("../../../../../pictures/ratedstar.png")} />
                    </StarContainer>
                    <p> 5 </p>
                </ProfileInfo>
                <p> Good and Wonderfull blabber, had a nice time with him </p>
                <small> 2 days ago </small>
            </Content>
        </StyledReview>
    );
};

export default Review;