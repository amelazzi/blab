import React from 'react';
import styled from 'styled-components';
import { gray, pink, lightGray } from '../../../styles/utilities/Colors';

const StyledTutor = styled.div`
    width: 19%;
    text-align: center;
    img{
        width: 100%;
    }
    h1{
        padding: 8px;
        padding-bottom: 0;
        font-size: 2.6rem;
    }
    h2{
        color: ${gray};
        font-size: 2.2rem;
    }
`;

const StyledRates = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: ${lightGray}
    }
`;

const StyledH1 = styled.h1`
    color: ${pink} !important
`;

const IconContainer = styled.div`
    width: 10%;
    img{
        width: 100%;
    }
`;


const RatedTutor = ({pic, name, language, rate, votes}) => {
    return (
        <StyledTutor>
                <img src={pic} />
                <h1> {name} </h1>
                <h2>{language} </h2>
                <StyledRates>
                    <IconContainer>
                        <img src={require("../../../pictures/star.png")} />
                    </IconContainer>
                    <StyledH1> {rate} </StyledH1>
                    <h1> ({votes}) </h1>
                </StyledRates>
        </StyledTutor>
    );
};

export default RatedTutor;
