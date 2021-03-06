import React from 'react'
import styled from 'styled-components'
import { lightGray, light } from '../../../../../styles/utilities/Colors';

const StyledRow = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 1fr 1fr 0.8fr 1fr;
    text-align:center;
    border-bottom: 1px solid ${light};
    padding:  0 1rem 1rem 1rem;
`;

const RowTitle = () => {
    return(
        <StyledRow>
            <h1> Student </h1>
            <h1> Description </h1>
            <h1> Native language </h1>
            <h1> Skills </h1>
            <h1> Offer </h1>
        </StyledRow>
    );
}

export default RowTitle;