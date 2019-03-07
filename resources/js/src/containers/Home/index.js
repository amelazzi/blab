import React from 'react'
import styled from 'styled-components'
import Slider from 'react-styled-carousel'

import {dark, gray} from '../../styles/utilities/Colors'

import Main from './components/Main'
import Head from './components/Head'
import RightSection from '../../components/RightSection'
import LeftSection from '../../components/LeftSection'
import Card from './components/Card'
import Testimony from './components/Testimony'
import RatedTutor from './components/RatedTutor'



const StyledHome = styled.div`
    background: white;
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 14rem;
    padding-bottom: 0;
`;

const StyledH1 = styled.h1`
    text-align: center;
    color: ${dark};
    font-size: 4.5rem;
    font-weight: bold;
    margin-top: 10rem;
`;

const StyledH2 = styled.h2`
    text-align: center;
    color: ${gray};
    font-size: 2.5rem;
    padding: 2rem;
`;


const StyledSlider = styled(Slider)`
    margin: 10rem;
    margin-bottom: 5rem;
`;


const TopTutors = styled.div`
    padding: 4rem;
    padding-bottom: 14rem;
    display: flex;
    justify-content: space-between;
`;


const Home = () => {
    return (
        <StyledHome>
            <Main>
                <Head/>
                <RightSection picture={require("../../pictures/pic1.png")} 
                    title="Over 30 languages course taken on this platform."
                    text="Let us take you on a journey through the varieties of 
                    languages thought on this platform by qualified tours.">
                </RightSection>
                <LeftSection picture={require("../../pictures/pic2.png")} 
                    title="Why use Blab?"
                    text="Over here at Blab, we take learning really serious, 
                    thats why we have put together the best tutors to take you throught
                    the experience of learning your favorite languageat your convenience.
                    With our mobile friendly platform, you can your online classes at
                    anywhere you are in the world.">

                </LeftSection>
                <CardsContainer>
                    <Card icon={require("../../pictures/icon.png")} 
                        title="Learn at your convinence"
                        text="Learning has been made easier with our mobile friendly package.
                        Swith between your computer, tablet or mobile devices at
                        anytime.">
                    </Card>
                    <Card icon={require("../../pictures/icon.png")} 
                        title="Get the best qualified Tutors"
                        text="Hire a tutor from our wide range of qualified 
                        teachers who are passionate to impact knowledge to you.">
                    </Card>
                    <Card icon={require("../../pictures/icon.png")} 
                        title="Wide range of Language"
                        text="Select a language to learn from our wide range of
                        foreign language.">
                    </Card>
                </CardsContainer>
                <StyledH1> What our customers are saying </StyledH1>
                <StyledSlider autoSlide={false} cardsToShow={1} showArrows={false}>
                    <Testimony pic={require("../../pictures/profile.png")}
                        text="Blab really help me in my transfer to Spain, I am
                        now fluent in spanish thanks tu tutors at Blab."
                        author="Paul Robinson">
                    </Testimony>
                    <Testimony pic={require("../../pictures/profile.png")}
                        text="Blab really help me in my transfer to Spain, I am
                        now fluent in spanish thanks tu tutors at Blab."
                        author="Paul Robinson">
                    </Testimony>
                    <Testimony pic={require("../../pictures/profile.png")}
                        text="Blab really help me in my transfer to Spain, I am
                        now fluent in spanish thanks tu tutors at Blab."
                        author="Paul Robinson">
                    </Testimony>
                </StyledSlider>
                <StyledH1> Featured Tutors </StyledH1>
                <StyledH2> Take a look at our top rating tutors for the week </StyledH2>
                <TopTutors>
                    <RatedTutor pic={require("../../pictures/profile.png")}
                        name="David Mark"
                        language="Chiness"
                        rate="4.7"
                        votes="15">
                    </RatedTutor>
                    <RatedTutor pic={require("../../pictures/profile.png")}
                        name="David Mark"
                        language="Chiness"
                        rate="4.7"
                        votes="15">
                    </RatedTutor>
                    <RatedTutor pic={require("../../pictures/profile.png")}
                        name="David Mark"
                        language="Chiness"
                        rate="4.7"
                        votes="15">
                    </RatedTutor>
                    <RatedTutor pic={require("../../pictures/profile.png")}
                        name="David Mark"
                        language="Chiness"
                        rate="4.7"
                        votes="15">
                    </RatedTutor>
                </TopTutors>
            </Main>
        </StyledHome>
    );
};

export default Home;
