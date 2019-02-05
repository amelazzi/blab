import React from 'react';
import styled from 'styled-components';
import { dark } from '../../../styles/utilities/Colors';

const StyledTestimony = styled.div`
    background: white;
    display: flex;
    justify-content: space-between;
`;

const ImgContainer = styled.div`
    width: 25%;
    img{
        width: 100%;
        border: none;
        border-radius: 8px;
    }
`;

const Content = styled.div`
    width: 70%;
    padding: 4rem;
    h1,h2{
        color: ${dark};
        font-size: 3.2rem;
    }
    h1{
        font-weight: bold;
    }
    h2{
        margin-top: 32px; 
    }
`;

const Testimony = ({pic, text, author}) => {
    return (
        <StyledTestimony>
            <ImgContainer>
                <img src={pic} />
            </ImgContainer>
            <Content>
                <h1> "{text}" </h1>
                <h2> {author} </h2>
            </Content>
        </StyledTestimony>
    );
};

export default Testimony;
