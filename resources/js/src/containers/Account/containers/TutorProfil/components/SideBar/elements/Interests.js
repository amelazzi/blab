import React from 'react'
import styled from 'styled-components'

import { dark } from '../../../../../../../styles/utilities/Colors'


const StyledInterest = styled.div`
    margin: 2rem 1rem;
    h1{
        margin-left: 1.5rem;
    }
`;

const InterestContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    button{
        border: 1px solid ${dark};
        border-radius: 8px;
        background: white;
        width: auto;
        font-size: 1.6rem;
        color: ${dark};
        font-weight: 300;
        margin: 0.5rem;
        padding: 0rem 2rem;
    }
`;



const Interests = ({args}) => {
    return(
        <StyledInterest>
            <h1> Interest </h1>
            <InterestContainer>
                {args}
            </InterestContainer>
        </StyledInterest>
    );
};

export default Interests;