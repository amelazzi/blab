import React from 'react'
import styled from 'styled-components'
import { dark, gray } from '../../../../../styles/utilities/Colors';


const Card = styled.div`
    width: 27rem;
    height: 27rem;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.11);
    display: flex;
    flex-direction: column;
    h1{
        font-size: 2.4rem;
        margin-top: 1rem;
        margin-left: 1.5rem;
    }
    p{
        color: ${dark};
        margin-left: 1.5rem;
        line-height: 1;
    }
`;

const ImgContainer = styled.div`
    width: 100%;
    height: 13.5rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Reactions = styled.div`
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const Reaction = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    p{
        color: ${dark};
        margin: 0;
        margin-left: 0.5rem;
        font-weight: 300;
    }
`;

const ReactionIcon = styled.div`
    width: 2rem;
    height: 2rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-top: -0.5rem;
    }
`;

const CourseCard = ({picture, title, classNbr, seenNbr, likeNbr, disLikeNbr}) => {
    return(
        <Card>
            <ImgContainer>
                <img src={picture} />
            </ImgContainer>
            <h1> {title} </h1>
            <p> Total Class: {classNbr} </p>
            <Reactions>
                <Reaction>
                    <ReactionIcon>
                        <img src={require("../../../../../pictures/ratedstar.png")} />
                    </ReactionIcon>
                    <p> {seenNbr} </p>
                </Reaction>
                <Reaction>
                    <ReactionIcon>
                        <img src={require("../../../../../pictures/ratedstar.png")} />
                    </ReactionIcon>
                    <p> {likeNbr} </p>
                </Reaction>
                <Reaction>
                    <ReactionIcon>
                        <img src={require("../../../../../pictures/ratedstar.png")} />
                    </ReactionIcon>
                    <p> {disLikeNbr} </p>
                </Reaction>

            </Reactions>
        </Card>
    );
};

export default CourseCard;