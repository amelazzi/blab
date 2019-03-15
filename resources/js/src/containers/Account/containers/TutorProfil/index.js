import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Slider from 'react-styled-carousel'

import { orange, purple } from '../../../../styles/utilities/Colors'

import SideBar from './components/SideBar/SideBar'
import CourseCard from './components/CourseCard'
import Review from './components/Review'
import DropDown from './components/DropDown'


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

const Reviews = styled.div`
    margin: 2rem 0 0 3rem;
    padding: 3rem 3rem;
    box-shadow: -4px 4px 4px 0 rgba(0, 0, 0, 0.11);
`;

const ReviewsInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-bottom: 4rem;
    h1, p{
        font-size: 3rem;
        margin: 0rem 2rem;
    }
    p{
        color: ${orange};
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

const StyledLink = styled(Link)`
    font-size: 1.8rem;
    color: ${purple};
    font-weight: 300;
    margin-top: 3rem !important;
`;

/*--------------------------- Variables ---------------------------*/

const Cards = [
    {id:"1", picture: require("../../../../pictures/lifestyle.png"), 
        title:"Lifestyle", classNbr:"10", seenNbr:"5", likeNbr:"8", disLikeNbr:"2"},
    {id:"2", picture: require("../../../../pictures/lifestyle.png"), 
        title:"Lifestyle", classNbr:"10", seenNbr:"5", likeNbr:"8", disLikeNbr:"2"},
    {id:"3", picture: require("../../../../pictures/lifestyle.png"), 
        title:"Lifestyle", classNbr:"10", seenNbr:"5", likeNbr:"8", disLikeNbr:"2"},
    {id:"4", picture: require("../../../../pictures/lifestyle.png"), 
        title:"Lifestyle", classNbr:"10", seenNbr:"5", likeNbr:"8", disLikeNbr:"2"},
];

const Card = Cards.map((cours)=>
    <CourseCard key={cours.id} picture={cours.picture} title={cours.title} 
        classNbr={cours.classNbr} seenNbr={cours.seenNbr} likeNbr={cours.seenNbr} disLikeNbr={cours.disLikeNbr} />
);

const Rvs = [
    {id: "1", picture: require("../../../../pictures/profile.png"), name:"Allison Moray",
        starsNbr:"5", content:"Good and Wonderfull blabber, had a nice time with him", time:"2 days"},
    {id: "2", picture: require("../../../../pictures/profile.png"), name:"Allison Moray",
        starsNbr:"5", content:"Good and Wonderfull blabber, had a nice time with him", time:"2 days"},
    {id: "3", picture: require("../../../../pictures/profile.png"), name:"Allison Moray",
        starsNbr:"5", content:"Good and Wonderfull blabber, had a nice time with him", time:"2 days"},
];

const Rv = Rvs.map((rv) =>
    <Review key={rv.id} picture={rv.picture} name={rv.name} 
        starsNbr={rv.starsNbr} content={rv.content} time={rv.time} />
);


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
                        {Card}
                    </StyledSlider>
                </Courses>
                <Reviews>
                    <ReviewsInfo>
                        <h1> Blabber Review </h1>
                        <StarContainer>
                            <img src={require("../../../../pictures/ratedstar.png")} />
                        </StarContainer>
                        <p> 5.0 </p>
                        <p> (23) </p>
                        <DropDown/>
                    </ReviewsInfo>
                    {Rv}
                    <StyledLink to="/"> + See More </StyledLink>
                </Reviews>
            </ProfileContent>
        </StyledProfil>
    );
};

export default TutorProfile;