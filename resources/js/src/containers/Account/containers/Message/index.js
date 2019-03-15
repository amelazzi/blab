import React from 'react'
import styled from 'styled-components'

import Conversation from './components/Conversation'
import Chat from './components/Chat'
import { gray } from '../../../../styles/utilities/Colors';

const StyledMessage = styled.div`
    background: white;
    width: 72.5%;
    padding: 3.4rem 1.7rem;
    padding-bottom: 0;
`;

const InputContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    border-bottom: 1px solid ${gray};
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

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row ;
    justify-content: space-between;
`;


const Message = () => {
    return(
        <StyledMessage>
            <InputContent>
                <Input type="text" placeholder="Type to search" />
                <Input type="text" placeholder="Sort" />
            </InputContent>
            <Content>
                <Conversation/>
                <Chat/>
            </Content>
        </StyledMessage>
    );
};

export default Message;