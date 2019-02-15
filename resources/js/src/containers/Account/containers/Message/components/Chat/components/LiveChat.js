import React from 'react'
import styled from 'styled-components'
import Scrollbar from 'react-custom-scrollbars'

import { lightGray } from '../../../../../../../styles/utilities/Colors'

import Typing from './Typing'


const StyledLiveChat = styled.div`
    width: 100%;
    height: 100%;
    padding: 3rem;
`;

const StyledLeftRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: start;
    color: black;
    margin-bottom: 0.6rem;
    p {
        padding: 0;
        margin: 0;
        font-size: 1rem;
    }
`;

const ImgContainer = styled.div`
    width: 6.8rem;
    height: 6.8rem;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const Messages = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 7rem);
    margin-top: 5rem;
`;

const StyledLeftMessage = styled.div`
    background: ${lightGray};
    width: 50%;
    border-radius: 0.5rem;
    padding: 0.7rem 1rem;
    margin-bottom: 1.17rem;
    
`;

const StyledRightRow = styled(StyledLeftRow)`
    float: right;
`;

const StyledRightMessage = styled(StyledLeftMessage)`
    background: white;
    border: 1px solid ${lightGray};
    margin-left: 50%;
`;

const LiveChat = () => {
    return(
        <Scrollbar style={ {width: '100%', height: '55rem'} }>    
            <StyledLiveChat>    
                <StyledLeftRow>
                    <ImgContainer>
                        <img src={require("../../../../../../../pictures/profile.png")} />
                    </ImgContainer>
                    <Messages>
                        <StyledLeftMessage>
                            Hello Professor
                        </StyledLeftMessage>
                        <StyledLeftMessage>
                            I thought this would be an awesome way to interact with the
                            interface.
                        </StyledLeftMessage>
                        <Typing/>
                    </Messages>
                </StyledLeftRow>
                <StyledRightRow>
                    <Messages>
                        <StyledRightMessage>
                            yes it is! and Welcome among us!
                        </StyledRightMessage>
                    </Messages>
                    <ImgContainer>
                        <img src={require("../../../../../../../pictures/profile.png")} />
                    </ImgContainer>
                </StyledRightRow>
            </StyledLiveChat>
        </Scrollbar>
    );
};

export default LiveChat;