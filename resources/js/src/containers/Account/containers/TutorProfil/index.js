import React from 'react'
import styled from 'styled-components'
import Slider from 'react-styled-carousel'

import SideBar from './components/SideBar/SideBar'
import CourseCard from './components/CourseCard'
import Review from './components/Review'

const StyledProfil = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
`;

const ProfileContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;


const InputContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 3rem;
`;

const Input = styled.input`
    margin: 0;
    &:nth-child(1){
        width: 65%;
    }
    &:nth-child(2){
        width: 30%;
    }
`;

const StyledH1 = styled.h1`
    margin: 0 1rem;
    font-size: 2.8rem;
`;

const Courses = styled.div`
    padding: 3rem 2rem;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.11);
`;

const StyledSlider = styled(Slider)`
    width: 90rem;
    margin: 2rem 0;
    margin-bottom: 1rem;
    padding: 0;
`;

const TutorProfile = () => {
    return(
        <StyledProfil>
            <SideBar/>
            <ProfileContent>
                <InputContent>
                    <Input type="text" placeholder="Type to search" />
                    <Input type="text" placeholder="Sort" />
                </InputContent>
                <Courses>
                    <StyledH1> Jeremey walter Course </StyledH1>
                    <StyledSlider autoSlide={false} cardsToShow={3} showArrows={false}>
                        <CourseCard picture={require("../../../../pictures/lifestyle.png")}
                            title="Lifestyle" classNbr="10" seenNbr="29" likeNbr="7" disLikeNbr="5"/>
                        <CourseCard picture={require("../../../../pictures/lifestyle.png")}
                            title="Lifestyle" classNbr="10" seenNbr="29" likeNbr="7" disLikeNbr="5"/>
                        <CourseCard picture={require("../../../../pictures/lifestyle.png")}
                            title="Lifestyle" classNbr="10" seenNbr="29" likeNbr="7" disLikeNbr="5"/> 
                            <CourseCard picture={require("../../../../pictures/lifestyle.png")}
                            title="Lifestyle" classNbr="10" seenNbr="29" likeNbr="7" disLikeNbr="5"/> 
                    </StyledSlider>
                </Courses>
            </ProfileContent>
        </StyledProfil>
    );
};

export default TutorProfile;