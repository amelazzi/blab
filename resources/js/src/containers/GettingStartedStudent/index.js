import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { lightGray } from '../../styles/utilities/Colors'
import Main from './components/Main'
import Head from './components/Head'
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

const GettingStartedStudent = () => {
    return (
        <Styled> 
            <Main>
                <Head/>
                <StyledH1> How it works </StyledH1>
                <LefSection picture={require("../../pictures/1.png")}
                    title="Become a Blabee"
                    text="Here on Blab, you are regarded as a Blabee while Toturs
                    regarder as Blabers.
                    So have fun pairing with a blabber today.">
                </LefSection>
                <RightSection picture={require("../../pictures/2.png")}
                    title="Mobility"
                    text="Learn and study on the regardless of your device">
                </RightSection>
                <LefSection picture={require("../../pictures/3.png")}
                    title="Make Payment"
                    text="Pay for yout class after being paired with a blabber.
                    Each class cost $10, and you only pay for the class you receive.">
                </LefSection>
                <RightSection picture={require("../../pictures/4.png")}
                    title="Taking Class"
                    text="Receive your class online via our platform,
                    with access to live chat and video coverage.">
                </RightSection>
                <LefSection picture={require("../../pictures/5.png")}
                    title="Request for Blabber"
                    text="Request a tutor right from your dashboard, send out specific
                    iinformation and receive various request  by available blabbers.">
                </LefSection>
            </Main>
        </Styled>
    );
};

export default GettingStartedStudent;
