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
                    picture={require("../../pictures/teacher.png")}>
                </StartedHead>
                <StyledH1> How it works </StyledH1>
                <LefSection picture={require("../../pictures/1.png")}
                    title="Become a Blabber"
                    text="Here on Blab, you are regarded as a Blabber while students are regarded as a blabee.
                    So have fun pairing and teaching a blabee today.">
                </LefSection>
                <RightSection picture={require("../../pictures/2.png")}
                    title="Mobility"
                    text="Explore our convinient services to teach students any time and anywhere,
                    regardless of your device">
                </RightSection>
                <LefSection picture={require("../../pictures/get-paied.png")}
                    title="Receiving Payment"
                    text="Get paid via  our system which pay directly to your paypal or payonner 
                    account linked to your account.">
                </LefSection>
                <RightSection picture={require("../../pictures/4.png")}
                    title="Tutoring"
                    text="Teach your students online via our live class session, 
                    which includes live video and chat services.">
                </RightSection>
                <LefSection picture={require("../../pictures/find-student.png")}
                    title="Find Student"
                    text="Search for new students via our student offers menu, 
                    and select based on your native language.">
                </LefSection>
            </Main>
        </Styled>
    );
};

export default StartedStudent;
