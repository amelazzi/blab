import React from 'react';
import Collapsible from 'react-collapsible'
import styled from 'styled-components'
import Scrollbar from 'react-custom-scrollbars'

import SimpleConversation from './SimpleConversation'
import { dark, light } from '../../../../../../../styles/utilities/Colors'

const StyledCollpsible = styled(Collapsible)`
    width: 38rem;
    font-size: 2rem;
    color: ${dark};
    padding: 2rem 1rem;
    box-shadow: 0 4px 2px -2px ${light};
`;

const SimpleCollapsible =() =>{
    return(
        <StyledCollpsible trigger="All Conversations">
            <Scrollbar style={ {width: '38rem', height: '68rem'} }>
                <SimpleConversation/>
                <SimpleConversation/>
                <SimpleConversation/>
                <SimpleConversation/>
                <SimpleConversation/>
                <SimpleConversation/>
                <SimpleConversation/>
                <SimpleConversation/>
                <SimpleConversation/>
                <SimpleConversation/>
                <SimpleConversation/>
                <SimpleConversation/>
            </Scrollbar>
        </StyledCollpsible>
    );
};
 
export default SimpleCollapsible;