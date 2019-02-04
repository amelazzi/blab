import React from 'react';
import Main from './components/Main';
import Head from './components/Head'
import RightSection from '../../components/RightSection'
import LeftSection from '../../components/LeftSection'
import Card from './components/Card'

import styled from 'styled-components'

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    padding: 14rem;
    padding-bottom:12rem;
`;

const Home = () => {
    return (
        <>
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
            </Main>
        </>
    );
};

export default Home;
