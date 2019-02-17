import React from 'react'
import styled from 'styled-components'
import { lightGray, purple, red } from '../../../styles/utilities';

const StyledTopic = styled.div`
    padding: 1rem;
    padding-left: 4rem;
    margin: 1.8rem 0;
    border: 1px solid ${lightGray};
    border-left: 5px solid ${red};
    box-shadow: 0 4px 2px -2px ${lightGray};
    border-radius: 9px;
    h3{
        font-size: 2.8rem;
    }
    small{
        font-size: 1.8rem;
        color: ${purple};
    }
`;

const TopicInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p{
        width: 72%;
        font-size: 1.9rem;
        font-weight: 300;
        line-height: normal;
    }
`;

const Comments = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
`;

const IconContainer = styled.div`
    width: 2.7rem;
    height: 2.7rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;


const Topic = ({title, time, content, comments}) => {
    return(
        <StyledTopic>
            <h3> {title} </h3>
            <small> {time} ago </small>
            <TopicInfo>
                <p> {content} </p>
                <Comments>
                    <IconContainer>
                        <img src={require("../../../pictures/comments.png")}/>
                    </IconContainer>
                    <small> {comments} comments </small>
                </Comments>
            </TopicInfo>
        </StyledTopic>
    );
};
export default Topic;