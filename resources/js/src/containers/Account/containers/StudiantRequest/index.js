import React from 'react';
import styled from 'styled-components'
import { lightGray, purple } from '../../../../styles/utilities/Colors';

import RowTitle from './components/RowTitle'
import Row from './components/Row'

const StyledIndex = styled.div`
    width: 75%;
    padding: 4rem 3.8rem;
    padding-bottom: 12rem;
    h2{
        font-size: 2.2rem;
        font-weight: 500;
    }
`;

const Active = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;

const ActiveNumber = styled.div`
    width: 3.6rem;
    height: 3.6rem;
    background: ${purple};
    border-radius: 50%;
    text-align: center;
    margin-left: 1rem;
    p{
        color: white;
        font-size: 2.2rem;
    }
`;

const InputContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    border-bottom: 1px solid ${lightGray};
`;


const Input = styled.input`
    font-size: 2rem !important;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.7;
    letter-spacing: normal;
    border: none !important;
    margin: 0;
    &:nth-child(1){
        width: 65%;
    }
    &:nth-child(2){
        width: 30%;
    }
`;

const Rows = styled.div`
    margin-top: 6rem;
`;


const StudiantRequest = () => {
    return(
        <StyledIndex>
            <InputContent>
                <Active>
                    <h2> Active </h2>
                    <ActiveNumber>
                        <p> 3 </p>
                    </ActiveNumber>
                </Active>
                <Input type="text" placeholder="Type to search" />
                <Input type="text" placeholder="Sort" />
            </InputContent>
            <Rows>
                <RowTitle/>
                <Row pic={require("../../../../pictures/profile.png")}
                    name="John Mark"
                    descript="I need a teacher to guide me in my spanish language, 
                    i am a novies just tryi..."
                    nativeLanguage="Spanich"
                    skills="Basic"/>
            </Rows>
        </StyledIndex>
    );
}

export default StudiantRequest;