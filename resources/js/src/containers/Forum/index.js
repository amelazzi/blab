import React from 'react'
import styled from 'styled-components'

import { lightPurple } from '../../styles/utilities'

import NewDiscussion from './components/NewDiscussion'
import DropDown from './components/DropDown'
import Topic from './components/Topic'


const StyledForum = styled.div`
    background: ${lightPurple};
    padding: 6rem 3.6rem;
    h1{
        text-align: center;
        font-size: 4.5rem;
        font-weight: bold;
    }
    h2{
        text-align: center;
        font-size: 4rem;
        font-weight: 500;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8rem;
`;

const TopicsContainer = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    width: 72rem;
    padding: 8rem 4.3rem;
`;


/*----------------------------- Variables --------------------------*/

var LatestTopics =[
    {title: "Welcome to Blab", time: "5minutes", content:"Welcome all to blab, introduce yourself here, this is where blabbers and blabees meet", comments:"25"},
    {title: "Welcome to Blab2", time: "5minutes", content:"Welcome all to blab, introduce yourself here, this is where blabbers and blabees meet", comments:"25"},
];

const LatestTopic = LatestTopics.map((topic) =>
    <Topic key={topic.title} title={topic.title} time={topic.time} content={topic.content} comments={topic.comments}/>
);

const Forum = () => {
    return(
        <StyledForum>
            <h1> Welcome to our Blab forum </h1>
            <h2> check everyday for new topics </h2>
            <Content>
                <TopicsContainer>
                    <DropDown type="Latest"
                        args={LatestTopic}/>
                </TopicsContainer>
                <NewDiscussion/>
            </Content>
        </StyledForum>
    );
};

export default Forum;