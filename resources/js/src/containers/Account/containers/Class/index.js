import React from 'react';
import styled from 'styled-components'
import Tabs from './components/Tabs'
import { purple } from '../../../../styles/utilities/Colors';

const StyledMyClass = styled.div`
    width: 75%;
    background: white;
    padding: 2rem 2rem 0 2rem;
`;


const MyClass = () => {
    return (
        <StyledMyClass>
            <Tabs/>
        </StyledMyClass>
    );
};

export default MyClass;

