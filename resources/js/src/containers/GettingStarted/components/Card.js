import React from 'react';
import styled from 'styled-components';
import { dark, purple, lightGray } from '../../../styles/utilities/Colors';

const StyledCard = styled.div`
    width: 300px;
    text-align: center;
    -webkit-box-shadow: 1px 1px 10px ${lightGray};
        box-shadow: 1px 1px 10px ${lightGray};
    h1{
        margin-top: 6rem !important;
        color: ${dark};
        font-size: 3rem !important;
    }
`;

const StyledContent = styled.div`
    padding: 5.5rem 7rem 3rem 7rem;
`;

const StyledImg = styled.div`
    width: 14.7rem;
    height: 14.7rem;
    margin: auto;
    img{
        width: 100%;
        object-fit: cover;
    }
`;
const StyledFooter = styled.div`
    background: ${purple};
    width: 60%;
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
