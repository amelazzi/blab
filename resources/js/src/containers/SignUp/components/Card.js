import React from 'react';
import styled from 'styled-components';
import { dark, darkGray, purple, gray } from '../../../styles/utilities/Colors';

const StyledCard = styled.div`
    border: 2px solid ${dark};
    width: 350px;
    text-align: center;
    h1{
        color: ${dark};
        padding: 16px 16px;
        padding-left: 0;
        padding-right: 0;
        font-size: 3rem;
    }
    p{
        padding: 8px;
        padding-top: 0;
        padding-bottom: 0;
        color: ${gray};
        font-size: 2.3rem;
        line-height: 1.3;
    }
`;

const StyledContent = styled.div`
    padding: 3rem;
`;

const StyledImg = styled.div`
    width: 60%;
    margin-left: 20%;
    img{
        width: 100%;
    }
`;
const StyledFooter = styled.div`
    background: ${purple};
    margin-top: 6rem;
    h1{
        color: white !important;
        padding: 12px 12px;
    }
`;

const Card = ({title, type}) => {
    return (
        <StyledCard>
            <StyledContent>
                <StyledImg>
                    <img src={require("../../../pictures/student.png")} />
                </StyledImg>
                <h1> {title} </h1>
                <p> Sign up as a {type} </p>
            </StyledContent>
            <StyledFooter>
                <h1> Continue </h1>
            </StyledFooter>
        </StyledCard>
    );
};

export default Card;
