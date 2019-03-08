import React from 'react';
import styled from 'styled-components';
import { dark } from '../../../styles/utilities/Colors';

const StyledTestimony = styled.div`
    background: white;
    display: flex;
    justify-content: space-between;
`;

const ImgContainer = styled.div`
    max-width: 20rem;
    max-height: 20rem;
    min-width: 20rem;
    min-height: 20rem;
    img{
        width: 100%;
        height: 100%;
        border-radius: 0.8rem;
    }
`;

const Content = styled.div`
    margin: 0rem 6rem;
    p{
        font-size: 2.6rem;
        line-height: 1.2;
    }
    h1{
        font-size: 2.8rem;
        margin: 4rem 0rem !important;
        font-weight: lighter;
    }
    
`;

const Testimony = ({pic, text, author}) => {
    return (
        <StyledTestimony>
            <ImgContainer>
                <img src={pic} />
            </ImgContainer>
            <Content>
                <p> "{text}" </p>
                <h1> {author} </h1>
            </Content>
        </StyledTestimony>
    );
};

export default Testimony;
