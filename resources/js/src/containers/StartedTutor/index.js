import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { lightGray } from '../../styles/utilities/Colors'
import Main from './components/Main'
import StartedHead from '../../components/StartedHead'
import LefSection from '../../components/LeftSection'
import RightSection from '../../components/RightSection'

const Styled = styled.div`
    background: white;
`;

const StyledH1 = styled.h1`
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
    padding: 3rem;
`;

const StartedStudent = () => {
    return (
        <Styled> 
            <Main>
                <StartedHead type="Tutor (Blabber)" 
                    picture={require("../../pictures/gettingStarted/teachers.png")}>
                </StartedHead>
                <StyledH1> How it works </StyledH1>
                <LefSection picture={require("../../pictures/gettingStarted/become-blabee.png")}
                    title="Become a Blabber"
                    text="Here on Blab, you are regarded as a Blabber while students are regarded as a blabee.
                    So have fun pairing and teaching a blabee today."/>
                <RightSection picture={require("../../pictures/gettingStarted/mobility.png")}
                    title="Mobility"
                    text="Explore our convinient services to teach students any time and anywhere,
                    regardless of your device"/>
                <LefSection picture={require("../../pictures/gettingStarted/receive-payment.png")}
                    title="Receiving Payment"
                    text="Get paid via  our system which pay directly to your paypal or payonner 
                    account linked to your account."/>
                <RightSection picture={require("../../pictures/gettingStarted/taking-class.png")}
                    title="Tutoring"
                    text="Teach your students online via our live class session, 
                    which includes live video and chat services."/>
                <LefSection picture={require("../../pictures/gettingStarted/find-student.png")}
                    title="Find Student"
                    text="Search for new students via our student offers menu, 
                    and select based on your native language."/>
                <RightSection picture={require("../../pictures/gettingStarted/taking-class.png")}
                    title="Blab Academy"
                    text="Goto our academy everyday for updated lesson plans to guide your next class, and also find latest updates from our supervisors" />

            </Main>
        </Styled>
    );
};

export default StartedStudent;
