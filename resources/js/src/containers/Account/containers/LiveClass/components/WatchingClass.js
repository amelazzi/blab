import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { purple } from '../../../../../styles/utilities/Colors'


const StyledWatching = styled.div`
    width: calc(100% - 28rem);
    margin: 0;
    margin-left: 1.4rem;
    padding-bottom: 11rem;
    background: #e9eeff;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2.6rem;
    padding-right: 6rem;
    h1{
        font-size: 2rem;
        color: ${purple};
        padding: 1rem;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.84;
        letter-spacing: normal;
    }
`;

const VideoContainer = styled.div`
    width: 93rem;
    height: 56.5rem;
    margin:0;
    margin-left: 1rem;
    margin-right: 1.5rem;
    background: ${purple};
`;

const ClassInfo = styled.div`
    padding: 1.5rem 3.4rem;
    h1{
        font-size: 2.7rem;
        line-height: 2.28rem;
        margin: 0;
        padding: 0;
    }
    p{
        margin-top: 3rem;
        margin-bottom: 0.8rem;
        margin-left: 1rem;
        font-size: 2.3rem;
        font-weight: 500;
    }
    li{
        p{
            margin: 0;
            margin-left: 1rem;
        }
    }
`;

const TutorInfo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 2rem;
    p{
        margin-top: 0 !important;
        margin-left: 4rem;
        font-size: 2.3rem;
        line-height: 1.94rem;
        font-weight: 300;
    }
`;

const StyledLink = styled(Link)`
    margin-left: 4rem;
    margin-top: -0.9rem;
    text-decoration: none;
    font-size: 2.3rem;
    line-height: 1.94rem;
    font-weight: 300;
    color: ${purple};
    :hover{
        text-decoration: none;
        color: ${purple};
    }
`;

const ImgContainer = styled.div`
    width: 6.2rem;
    height: 6.2rem;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const Tabs = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    border-radius: 1.7rem;
    padding: 1.5rem 6rem;
    padding-top: 2.5rem;
    margin-top: 3rem;
`;


const WatchingClass = () => {
    return(
        <StyledWatching> 
            <TitleContainer>
                <h1> Live Class </h1>
                <h1> 22:56 </h1>
            </TitleContainer>
            <VideoContainer></VideoContainer>
            <ClassInfo>
                <h1> Basic English </h1>
                <TutorInfo>
                    <ImgContainer>
                        <img src={require("../../../../../pictures/profile.png")} />
                    </ImgContainer>
                    <p> Evans Barrow </p>
                    <StyledLink to="/"> Send Message </StyledLink>
                </TutorInfo>
                <Tabs>
                    <StyledLink to="/"> Class Details </StyledLink>
                    <StyledLink to="/"> Live Chat </StyledLink>
                </Tabs>
                <p> Every lesson go deep into understanding the basic of 
                    English Language.
                </p>
                <li> <p> Learning efficient </p> </li>
                <li> <p> question and answer </p> </li>
                <li> <p> Parts of speech </p> </li>
                <li> <p> Idioms and expression  </p></li>
            </ClassInfo>
        </StyledWatching>
    );
};

export default WatchingClass