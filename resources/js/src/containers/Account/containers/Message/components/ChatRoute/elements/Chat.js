import React from 'react'
import styled from 'styled-components'
import ChatIcon from '../chat.png'
import DownIcon from '../down.png'

const StyledContainer = styled.div`
  width: 16vh;
  height: 14vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`

const StyledChatContainer = styled.div`
  width: 3.4rem;
  height: 3.4rem;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

const StyledChat = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  object-fit: contain;
  margin-top: 0.3rem;
`
const StyledDown = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: contain;
`

const Chat = () => {
    return(
        <StyledContainer>
            <h1> chaaaat miaaw </h1>
            <StyledChatContainer>
                <StyledChat src={ChatIcon} />
            </StyledChatContainer>
            <StyledDown src={DownIcon} />
        </StyledContainer>
    );
};

export default Chat;