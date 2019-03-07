import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { purple, lightGray } from '../../../../../styles/utilities/Colors'

import SimpleDropdown from '../components/DropDown'
import {DropdownItem} from 'styled-dropdown-component';

const StyledFindBlabber = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15.2rem 6rem 4.6rem 6rem;
`;

const FakeButton = styled.button`
    padding: 1.2rem;
    margin-bottom: -3.4rem;
    z-index:1;
    border: none;
    background: ${purple};
    color: white;
    font-size: 2.4rem;
    border-radius: 0.4rem;
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 8.8rem 10rem 4rem 10rem;
    border-radius: 3px;
    box-shadow: 0 4px 4px 0 #4d70f4;
    h1{
        margin:0;
        margin-top: 2rem;
        font-size: 2.4rem;
    }
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 21.7rem;
    padding: 1rem 0.8rem;
    margin-top: 0.5rem;
    outline: none;
    border: 1px solid ${lightGray};
    border-radius: 5px;
    ::placeholder{
        font-size: 1.9rem;
        font-weight: 500;
    }

`;

const RealButton = styled(FakeButton)`
    line-height: 2rem;
    padding-left: 6rem !important;
    padding-right: 6rem !important;
    font-size: 2rem !important;
    margin-top: 14.2rem;
    margin-left: 22rem;
    cursor: pointer;
`;


/*----------------------------- Variables --------------------------*/

var LearnedLangs =[
    {name: "English"},
    {name: "Spanish"},
    {name: "French"},
];

const LearnedLang = LearnedLangs.map((learnLang) =>
    <DropdownItem key={learnLang.name}>{learnLang.name}</DropdownItem>
);


const RequestDetails = () => {
    return(
        <StyledFindBlabber>
            <FakeButton> Request Details </FakeButton>
            <StyledCard>
                <>
                    <h1> Choose language to learn </h1>
                    <SimpleDropdown args={LearnedLang}/>
                </>
                <>
                    <h1> Current language skills</h1>
                    <SimpleDropdown args={LearnedLang}/>
                </>
                <>
                    <h1> Select native language </h1>
                    <SimpleDropdown args={LearnedLang}/>
                </>

                <>
                    <h1> Short description </h1>
                    <StyledTextArea placeholder="Short note to tutor" />
                </>                
                <Link to="/account/find-blabber/proceed">
                    <RealButton> Proceed </RealButton>
                </Link>
            </StyledCard>
        </StyledFindBlabber>
    );
};

export default RequestDetails;