import React from 'react'
import styled from 'styled-components'
import SimpleCollapsible from './element/SimpleAccordion'

import { lightGray } from '../../../../../../styles/utilities/Colors'


const StyledConversation = styled.div`
    height: 72rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-right: 1px solid ${lightGray};
`;


const Conversation = () => {
    return(
        <StyledConversation>
            <SimpleCollapsible/>
        </StyledConversation>
    );
};

export default Conversation;