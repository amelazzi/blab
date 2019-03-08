import React from 'react'
import styled from 'styled-components'
import Slider from 'react-styled-carousel'

import {dark, gray} from '../../styles/utilities/Colors'

import Main from './components/Main'
import Head from './components/Head'
import Card from './components/Card'
import Testimony from './components/Testimony'
import RatedTutor from './components/RatedTutor'
import RightSection from '../../components/RightSection';



const StyledHome = styled.div`
    background: white;
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6rem 15.6rem;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
`;

const StyledH1 = styled.h1`
    text-align: center;
    color: ${dark};
    font-size: 4rem;
    font-weight: bold;
    margin-top: 6rem;
`;

const StyledH2 = styled.h2`
    text-align: center;
    color: ${gray};
    font-size: 2.5rem;
    padding: 2rem;
`;

const Testimonies = styled.div`
    padding: 2rem 20rem;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
`;
const StyledSlider = styled(Slider)`
    padding: 10rem 0rem;
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
                <StyledH1> Why use Blab? </StyledH1>
                <CardsContainer>
                    <Card icon={require("../../pictures/home/learning.png")} 
                        text="We work on our platform to create a good learning style between our teachers and sstudent">
                    </Card>
                    <Card icon={require("../../pictures/home/access.png")} 
                        text="Easy access to our platform via our mobile friendly package. switch between your computer, tablet or mobile devices at anytime ">
                    </Card>
                    <Card icon={require("../../pictures/home/global.png")} 
                        text="We have a large global reach of native language for easy communication among our students and instrutors">
                    </Card>
                </CardsContainer>
                <Testimonies>
                    <StyledH1> What our customers are saying? </StyledH1>
                    <StyledSlider autoSlide={false} cardsToShow={1} showArrows={false}>
                        <Testimony pic={require("../../pictures/home/paul.png")}
                            text="Blab really help me in my transfer to Spain, I am
                            now fluent in spanish thanks tu tutors at Blab."
                            author="Paul Robinson">
                        </Testimony>
                        <Testimony pic={require("../../pictures/home/paul.png")}
                            text="Blab really help me in my transfer to Spain, I am
                            now fluent in spanish thanks tu tutors at Blab."
                            author="Paul Robinson">
                        </Testimony>
                        <Testimony pic={require("../../pictures/home/paul.png")}
                            text="Blab really help me in my transfer to Spain, I am
                            now fluent in spanish thanks tu tutors at Blab."
                            author="Paul Robinson">
                        </Testimony>
                    </StyledSlider>
                </Testimonies>
                <div>
                    <StyledH1> How does it work? </StyledH1>
                    <RightSection picture={require("../../pictures/home/students.png")}
                        title="A Student"
                        text="You can signup as a blabee (Student) on our platform, with a minimalist dashboard you can easily access various sections of the screen.
                        Go to our getting started page to check full functions of our blabee"/>
                    <RightSection picture={require("../../pictures/home/teacher.png")}
                        title="A Student"
                        text="Signup as a blabber (Tutor) on our platform, with a minimalist dashboard you can easily access various sections of the screen. You also get to be involved in our professional lesson plan guide to guide you. 
                        Go to our getting started page to check full functions of our blabber"/>
                </div>
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
