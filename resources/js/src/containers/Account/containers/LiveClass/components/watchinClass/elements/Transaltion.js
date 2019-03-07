import React from 'react'
import styled from 'styled-components'
import { lightGray } from '../../../../../../../styles/utilities/Colors';

const StyledTranslation = styled.div`
    width: 38%;
    background: white;
    border-radius: 15px;
    margin-top:1rem;
    padding: 4rem 1.4rem;
    h1{
        font-size: 2.5rem;
        margin-bottom: 4rem !important;
    }
`;

const InputContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    small{
        font-size: 1.4rem;
        margin-left: 1rem;
    }
`;

const Input = styled.input`
    background: ${lightGray};
    border: none;
    border-radius: 7px;
    font-size: 2.3rem;
    padding: 1rem;
`;


const Translation = () => {
    return(
        <StyledTranslation>
            <h1> Translate here </h1>
            <InputContainer>
                <small> English </small>
                <Input placeholder="Enter text"/>
            </InputContainer>
            <InputContainer>
                <small> Native Language </small>
                <Input placeholder="Translation"/>
            </InputContainer>
        </StyledTranslation>
    );
};

export default Translation;