import React from 'react'
import styled from 'styled-components'
import { gray } from '../../../../../../../styles/utilities/Colors';


const StyledTopic = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem;
`;

const ImgContainer = styled.div`
    max-width: 8.5rem;
    max-height: 8.5rem;
    min-width: 8.5rem;
    min-height: 8.5rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

const TopicContent =styled.div`
    border: 1px solid ${gray};
    border-radius: 5rem;
    padding: 0.8rem 4rem;
    margin-left: 2.5rem;
    p{
        color: ${gray};
        font-size: 2rem;
        line-height: normal;
        margin: 0 !important;
    }
`;


const Topic = ({profilePic, content}) => {
    return(
        <StyledTopic>
            <ImgContainer>
                <img src={profilePic} />
            </ImgContainer>
            <TopicContent>
                <p> {content} </p>
            </TopicContent>
        </StyledTopic>
    );
};
export default Topic;