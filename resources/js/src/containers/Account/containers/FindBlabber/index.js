import React from 'react';
import styled from 'styled-components'
import { purple } from '../../../../styles/utilities/Colors'

import SimpleDropdown from './components/DropDown'

const StyledFindBlabber = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15.2rem 6rem 4.6rem 6rem;
`;

const StyledButton = styled.button`
    padding: 1.6rem;
    border: none;
    background: ${purple};
    color: white;
    font-size: 2.4rem;
    border-radius: 0.4rem;
`;

const StyledCard = styled.div`
    width: 100%;
    padding: 8.8rem 10rem 8.8rem 10rem;
    h1{
        font-size: 2.4rem;
    }
`;

const FindBlabber = () => {
    return (
        <StyledFindBlabber>
            <StyledButton> Request Details </StyledButton>
            <StyledCard>
                <h1> Choose language to learn </h1>
                <SimpleDropdown/>
            </StyledCard>
        </StyledFindBlabber>
    );
};

export default FindBlabber;

