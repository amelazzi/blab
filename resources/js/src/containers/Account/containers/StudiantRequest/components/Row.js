import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { lightGray, purple } from '../../../../../styles/utilities/Colors'

const StyledRow = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 0.9fr 1fr 1fr 1fr;
    border-bottom: 1px solid ${lightGray};
    padding-top: 2.2rem;
    h1{
        text-align: center;
        color: ${lightGray};
        font-size: 2.2rem;
        font-weight: 500;
        line-height: 1.7;
    }
    button{
        margin-top: 4rem;
        width: 168px;
        height: 34px;
        border: none;
        border-radius: 6px;
        background-color: ${purple};
        color: white;
    }
`;

const ProfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

const ImgContainer = styled.div`
    width: 6.4rem;
    height: 6.4rem;
    margin: auto;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Description = styled.p`
    font-size: 1.5rem;
    line-height: 1.23;
    letter-spacing: -0.2px;
`;

const StyledLink = styled(Link)`
    color: ${purple};
    :hover{
        text-decoration: none;
        color: ${purple}
    }
`;

const Row = ({pic, name, descript, nativeLanguage, skills}) => {
    return(
        <StyledRow>
            <ProfilContainer>
                <ImgContainer>
                    <img src={pic} />
                </ImgContainer>
                <h1> {name} </h1>
            </ProfilContainer>
            <Description> {descript} <StyledLink  to="/"> Read More </StyledLink> </Description>
            <h1>{nativeLanguage}</h1>
            <h1>{skills}</h1>
            <button> Send Offer </button>
        </StyledRow>
    );
};

export default Row;