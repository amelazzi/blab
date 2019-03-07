import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Scrollbar from 'react-custom-scrollbars'

import { purple, gray, lightGray } from '../../../../../../styles/utilities/Colors'

import ClassDetail from './elements/ClassDetail'
import Translation from './elements/Transaltion'
import Note from './elements/Note'


const StyledWatching = styled.div`
    width: calc(100% - 28rem);
    margin: 0;
    margin-left: 1.4rem;
    padding: 0rem 1rem;
    padding-bottom: 11rem;
    background: #e9eeff;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 2.6rem;
    padding-right: 6rem;
    h1{
        font-size: 2rem;
        color: ${purple};
        padding: 1rem;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.84;
        letter-spacing: normal;
    }
`;

const VideoContainer = styled.div`
    width: 100%;
    height: 56.5rem;
    margin:0;
    background: ${purple};
`;

const ClassInfoContainer = styled.div`
    padding: 1.5rem 2rem;
    h1{
        font-size: 2.7rem;
        line-height: 2.28rem;
        margin: 0;
        padding: 0;
    }
`;

const TutorInfo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 2rem;
    p{
        margin-top: 0 !important;
        margin-left: 4rem;
        font-size: 2.3rem;
        line-height: 1.94rem;
        font-weight: 300;
    }
`;

const StyledLink = styled(Link)`
    margin-left: 4rem;
    margin-top: -0.9rem;
    text-decoration: none;
    font-size: 2.3rem;
    line-height: 1.94rem;
    font-weight: 300;
    color: ${purple};
    :hover{
        text-decoration: none;
        color: ${purple};
    }
`;

const ImgContainer = styled.div`
    width: 6.2rem;
    height: 6.2rem;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const ClassInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Topics = styled.div`
    background: white;
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 4.5rem;
    padding: 4.5rem 0rem;
    padding-right: 4rem;
`;

const StyledBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: white;
    border: 1px solid ${gray};
    border-radius: 29px;
    padding: 0.6rem 1.8rem;
    color: ${gray};
    font-size: 2.3rem;
    margin-bottom: 4rem;
    margin-left: 13rem;
`;


const IconContainer = styled.div`
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 1rem !important;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;


/*------------------------------- Variables --------------------------- */
var ClassGoals = [
    {content: "Learning efficient "},
    {content: "question and answer "},
    {content: "Parts of speech"},
    {content: "Idioms and expression "},
]

const Goals = ClassGoals.map((goal) =>
    <li key={goal.content}> <p> {goal.content} </p> </li>
);


const WatchingClass = () => {
    return(
        <StyledWatching> 
            <TitleContainer>
                <h1> Live Class </h1>
                <h1> 22:56 </h1>
            </TitleContainer>
            <VideoContainer/>
            <ClassInfoContainer>
                <h1> Basic English </h1>
                <TutorInfo>
                    <ImgContainer>
                        <img src={require("../../../../../../pictures/profile.png")} />
                    </ImgContainer>
                    <p> Evans Barrow </p>
                    <StyledLink to="/"> Send Message </StyledLink>
                </TutorInfo>
                <ClassInfo>
                    <ClassDetail resume="Every lesson go deep into understanding the basic of 
                    English Language."
                        args={Goals}/>
                    <Translation/>
                </ClassInfo>
                <Topics>
                    <StyledBtn> 
                        <IconContainer>
                            <img src={require("../../../../../../pictures/comments.png")} />
                        </IconContainer>
                        Add notes 
                    </StyledBtn>
                    <Scrollbar style={ {width: '100%', height: '40rem'} }>
                        <Note profilePic={require("../../../../../../pictures/profile.png")}
                            content="Lorem ipsum dolor sit amet, mei ut mediocrem reformidans, pro ei liber 
                            epicurei. At adipisci qualisque mel. Eu idque partiendo mei, homero 
                            praesent philosophia ex ius. Sea veri cetero id, verear indoctum ex duo."/>
                        <Note profilePic={require("../../../../../../pictures/profile.png")}
                            content="Lorem ipsum dolor sit amet, mei ut mediocrem reformidans, pro ei liber 
                            epicurei. At adipisci qualisque mel. Eu idque partiendo mei, homero 
                            praesent philosophia ex ius. Sea veri cetero id, verear indoctum ex duo."/>
                        <Note profilePic={require("../../../../../../pictures/profile.png")}
                            content="Lorem ipsum dolor sit amet, mei ut mediocrem reformidans, pro ei liber 
                            epicurei. At adipisci qualisque mel. Eu idque partiendo mei, homero 
                            praesent philosophia ex ius. Sea veri cetero id, verear indoctum ex duo."/>
                        <Note profilePic={require("../../../../../../pictures/profile.png")}
                            content="Lorem ipsum dolor sit amet, mei ut mediocrem reformidans, pro ei liber 
                            epicurei. At adipisci qualisque mel. Eu idque partiendo mei, homero 
                            praesent philosophia ex ius. Sea veri cetero id, verear indoctum ex duo."/>
                    </Scrollbar>
                </Topics>
            </ClassInfoContainer>
        </StyledWatching>
    );
};

export default WatchingClass