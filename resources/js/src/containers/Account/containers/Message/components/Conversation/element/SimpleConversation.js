import React from 'react'
import styled from 'styled-components'
import { gray } from '../../../../../../../styles/utilities/Colors';


const StyledConversation = styled.div`
    width: 38rem;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 1.3rem;
    border-bottom: 1px solid ${gray};
`;

const ImgContainer = styled.div`
    width: 4rem;
    height: 4rem;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const ConversationInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2.3rem;
    p{
        font-size: 2rem;
        color: ${gray};
    }
`;

const MsgInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1{
        font-size: 1.9rem;
    }
`;

const SimpleConversation = () => {
    return(
        <StyledConversation>
            <ImgContainer>
                <img src={require("../../../../../../../pictures/profile.png")} />
            </ImgContainer>
            <ConversationInfo>
                <MsgInfo>
                    <h1> Mark John </h1>
                    <h1> 20:15 </h1>
                </MsgInfo>
                <p> What would you be doing later... </p>
            </ConversationInfo>
        </StyledConversation>
    );
};

export default SimpleConversation;