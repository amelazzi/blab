import React from 'react'
import styled from 'styled-components'
import { lightGray } from '../../../../../../../styles/utilities/Colors';


const StyledInput = styled.input`
    padding: 1.5rem;
    margin: 1.5rem;
    border: 1px solid ${lightGray};
    border-radius: 0.2rem;
    ::placeholder{
        font-size: 1.6rem;
    }

`;

const MsgInput = () => {
    return(
        <>
            <StyledInput placeholder="Type a message" />
        </>
    );
};

export default MsgInput;