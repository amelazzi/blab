import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import MsgInput from './components/MsgInput'


const StyledChat = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Chat = () => {
    return(
        <StyledChat>
            <Header picProfile={require("../../../../../../pictures/profile.png")}
                name="Mark John"/>
            <MsgInput/>
        </StyledChat>
    );
};

export default Chat;