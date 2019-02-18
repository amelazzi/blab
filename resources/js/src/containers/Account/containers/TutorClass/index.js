import React from 'react'
import styled from 'styled-components'

import Tabs from './components/Tabs'

const StyledTutorClass  = styled.div`
    background: white;
    width: 75%;
    h1{
        padding-left: 2rem;
        font-size: 3rem;
    }
`;

const Input = styled.input`
    margin: 0;
    border: none !important;
    &:nth-child(1){
        width: 65%;
    }
    &:nth-child(2){
        width: 30%;
    }
`;

const InputContent = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    input {
        z-index: 3;
        padding: 3.2rem 2rem;
        padding-bottom: 1rem;
    }
`;


const TutorClass = () => {
    return(
        <StyledTutorClass>
            <InputContent>
                <Input type="text" placeholder="Type to search" />
                <Input type="text" placeholder="Sort" />
            </InputContent>
            <Tabs/>
        </StyledTutorClass>
    );
};

export default TutorClass;