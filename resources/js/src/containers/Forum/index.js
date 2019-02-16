import React from 'react'
import styled from 'styled-components'

import { lightPurple } from '../../styles/utilities'

import NewDiscussion from './components/NewDiscussion'



const StyledForum = styled.div`
    background: ${lightPurple};
    padding: 8rem 3.6rem;
    h1{
        text-align: center;
        font-size: 4.5rem;
        font-weight: bold;
    }
    h2{
        text-align: center;
        font-size: 4rem;
        font-weight: 500;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


const Forum = () => {
    return(
        <StyledForum>
            <h1> Welcome to our Blab forum </h1>
            <h2> check everyday for new topics </h2>
            <Content>
                <NewDiscussion/>
            </Content>
        </StyledForum>
    );
};

export default Forum;