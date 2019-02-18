import React, {Component} from 'react'
import styled from 'styled-components'
import Collapsible from 'react-collapsible'

import { purple, dark} from '../../../../../../../styles/utilities/Colors'

import ClassItem from './ClassItem'


const StyledCollpsible = styled(Collapsible)`
    width: 95%;
    background: white;
    color: ${dark};
    box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.15);
    padding: 2rem 1rem;
    font-size: 3rem;
    border: none;
    border-radius: 0;
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
        <StyledCollpsible trigger="Class list">
            <ClassItem/>
            <ClassItem/>
            <ClassItem/>
        </StyledCollpsible>
    );
};

export default SimpleCollapsible;