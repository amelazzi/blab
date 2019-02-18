import React from 'react'
import styled from 'styled-components'
import { dark } from '../../../../../../../styles/utilities/Colors';

const StyledItem = styled.div`
    width: 95%;
    box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: white;
    padding: 1.5rem 1rem;
    padding-right: 7rem;
    margin: 1.25rem 0rem;
    h1{
        font-size: 2.4rem;
        margin-left: 7rem;
    }
`;

const IconContainer = styled.div`
    max-width: 9.6rem;
    max-height: 9.6rem;
    min-width: 9.6rem;
    min-height: 9.6rem;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const Reactions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 15rem;
`;

const Reaction = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-left: 6rem;
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



const ClassItem = () => {
    return(
        <StyledItem>
            <IconContainer>
                <img src={require("../../../../../../../pictures/profile.png")} />
            </IconContainer>
            <h1>Basic_english_01</h1>
            <Reactions>
                <Reaction>
                    <ReactionIcon>
                        <img src={require("../../../../../../../pictures/ratedstar.png")} />
                    </ReactionIcon>
                    <p> 12 </p>
                </Reaction>
                <Reaction>
                    <ReactionIcon>
                        <img src={require("../../../../../../../pictures/ratedstar.png")} />
                    </ReactionIcon>
                    <p> 4 </p>
                </Reaction>
                <Reaction>
                    <ReactionIcon>
                        <img src={require("../../../../../../../pictures/ratedstar.png")} />
                    </ReactionIcon>
                    <p> 6 </p>
                </Reaction>
            </Reactions>
        </StyledItem>
    );
};
export default ClassItem;