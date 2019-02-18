import React, {Component} from 'react'
import styled from 'styled-components'

import Collapsible from 'react-collapsible'
import { purple} from '../../../../../../../styles/utilities/Colors'

import CollabsibleItem from './CollapsibleItem'


const StyledCollpsible = styled(Collapsible)`
    background: ${purple};
    color: white;
    padding: 1rem;
    width: 100%;
    box-shadow: none;
    font-size: 1.9rem;
    border: none;
    border-radius: 0;
    margin-bottom: 0.2rem;
    &:hover{
        background: ${purple} !important;
        border: none !important; 
        border-radius: 0 !important;
        color: white;
        cursor: pointer;    
    }
`;


const SimpleCollapsible = () => {
    return(
        <StyledCollpsible trigger="All Conversations">
            <CollabsibleItem/>
            <CollabsibleItem/>
            <CollabsibleItem/>
            <CollabsibleItem/>  
        </StyledCollpsible>
    );
};

export default SimpleCollapsible;