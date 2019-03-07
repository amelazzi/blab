import React from 'react';
import styled from 'styled-components';
import { dark, purple, gray, lightGray } from '../../../styles/utilities/Colors';

const StyledCard = styled.div`
    width: 300px;
    text-align: center;
    -webkit-box-shadow: 1px 1px 10px ${lightGray};
        box-shadow: 1px 1px 10px ${lightGray};
    h1{
        color: ${dark};
        padding: 4rem 0 0 0;
        font-size: 3rem !important;
    }
`;

const StyledContent = styled.div`
    padding: 4rem;
`;

const StyledImg = styled.div`
    width: 70%;
    margin-left: 15%;
    img{
        width: 100%;
    }
`;
const StyledFooter = styled.div`
    background: ${purple};
    width: 60%;
    margin-top: 6rem;
    margin-left: 40%;
    border-top-left-radius: 32px;
    h2{
        color: white !important;
        padding: 16px 16px;
        font-size: 2.4rem !important;
    }
`;

const Card = ({icon, type}) => {
    return (
        <StyledCard>
            <StyledContent>
                <StyledImg>
                    <img src={icon} />
                </StyledImg>
                <h1> {type} </h1>
            </StyledContent>
            <StyledFooter>
                <h2> Get Started </h2>
            </StyledFooter>
        </StyledCard>
    );
};

export default Card;
