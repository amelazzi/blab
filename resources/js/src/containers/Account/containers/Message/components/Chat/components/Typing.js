import React from 'react'
import styled from 'styled-components'
import { lightGray } from '../../../../../../../styles/utilities/Colors';


const StyledTyping = styled.div`
    display: flex;
    flex-direction: column;
    width: 114px;
    text-align: center;
    p{
        color: ${lightGray};
        font-size: 2rem !important;
    }
`;

const TypingBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 17px 25px;
    border: 1px solid ${lightGray};
    border-radius: 2px;
`;

const Eclipse = styled.div`
    width: 10.7px;
    height: 10.7px;
    border-radius: 50%;
    background: ${lightGray};
    margin-right: 9.7px;
    :nth-child(3){
        margin-right: 0;
    }
`;

const Typing = () => {
    return(
        <StyledTyping>
            <TypingBox>
                <Eclipse/>
                <Eclipse/>
                <Eclipse/>
            </TypingBox>
            <p> Typing... </p>
        </StyledTyping>
    );
};

export default Typing;