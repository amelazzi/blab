import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { purple } from '../../../styles/utilities/Colors';

const backgroundImg = require("../../../pictures/home/background.png");
const searchIcon = require("../../../pictures/home/search.png");

const StyledHead = styled.div`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
`;

const HeadContent = styled.div`
    padding : 12rem 32rem;
    text-align: center;
    color: white;
    margin: auto;
    h1{
        color: white;
        font-size: 4rem;
        font-weight: 600;
    }
    p{
        font-size: 1.6rem;
        line-height: 1;
        margin: 4.5rem 0rem;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
`;

const SearchInput = styled.input`
    margin: 0;
    padding: 0.6rem 1rem;
    padding-left: 4rem;
    border: none;
    flex:1;
    font-size: 1.8rem;
    line-height: 0.6;

    background: url(${searchIcon}) no-repeat;
    background-size: 2.5rem;
    background-position: 0.8rem center;
`;

const SearchButton = styled.button`
    border: none;
    background: ${purple};
    color: white;
    padding: 0.8rem 2.8rem;
    font-size: 1.6rem;
    font-weight: 300;
    :hover{
        cursor: pointer;
    }
`;

const Head = () => {
    return (
        <StyledHead>
            <HeadContent>
                <h1> What we offer on our platform? </h1>
                <p> We offer a interactive sessions between our students and instructor 
                    (blabees and blabber), learning has never been more fun and interactive 
                    with our live classes   
                </p>
                <SearchContainer>
                    <SearchInput/>
                    <SearchButton> Search </SearchButton>
                </SearchContainer>
            </HeadContent>
        </StyledHead>
    );
};

export default Head;
