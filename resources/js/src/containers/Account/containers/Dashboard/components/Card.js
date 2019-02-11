import React from 'react';
import styled from 'styled-components'
import {lightGray, light} from '../../../../../styles/utilities/Colors'

const StyledCard  = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    padding: 2rem;
    border: 1px solid ${lightGray};
    button{
        margin-top: 13rem;
        margin-left: 38%;
        border: 3px solid green;
        border-radius: 8px;
        padding: 0 3rem 0 3rem;
        background: white;
        font-size: 1.8rem;
    }
`;

const TutorProfil = styled.div`
    padding: 1rem;
    text-align: center;
    padding-bottom: 4rem;
    width: 18%;
    box-shadow: 3px 3px ${light};
    h3{
        font-size: 1.8rem;
        padding: 1rem 0 0 0;
    }
    h4{
        font-size: 1.8rem;
        padding: 1rem 0 0 0;
    }
`;

const ImgContainer = styled.div`
    width: 30%;
    margin-left: 35%;
    img{
        width: 100%;
        border-radius: 100%;
    }
`;

const SessionTime = styled.div`
    text-align: center;
    margin-left: 10%;
    margin-top: 3rem;
    p{
        font-size: 1.6rem;
    }
`;

const Card = ({tutorPic, tutorName, className}) => {
    return (
        <StyledCard> 
            <TutorProfil>
                <ImgContainer>
                    <img src={tutorPic} />
                </ImgContainer>
                <h3> {tutorName} </h3>
                <h4> {className} class </h4>
            </TutorProfil>
            <SessionTime>
                <p> Next class starts: </p>
                <p> 05 : 09 : 45 </p>
                <p>  h : m  : s </p>
            </SessionTime>
            <button> Start Class </button>
        </StyledCard>
    );
};

export default Card;
