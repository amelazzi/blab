import React from 'react';
import styled from 'styled-components'

const StyledBlabber  = styled.div`
    width: 75%;
    padding: 2rem 2rem 0 2rem;
    padding-bottom: 12rem;
    h1{
        padding-left: 2rem;
        font-size: 3rem;
    }
`;

const Input = styled.input`
    margin: 0;
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
    padding: 0
`;


const Blabber = () => {
    return (
        <StyledBlabber>
            <InputContent>
                <Input type="text" placeholder="Type to search" />
                <Input type="text" placeholder="Sort" />
            </InputContent>
        </StyledBlabber>
    );
};

export default Blabber;

