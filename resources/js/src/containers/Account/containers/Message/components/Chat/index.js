import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'


const StyledChat = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Chat = () => {
    return(
        <StyledChat>
            <Header/>
        </StyledChat>
    );
};

export default Chat;