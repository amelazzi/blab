import React from 'react';
import styled from 'styled-components';
import {gray, blue } from '../../../styles/utilities/Colors';

const StyledMain = styled.main`
    flex: 1;
`;

const StyledHead = styled.div`
    background: ${gray};
    padding : 7rem;
    padding-bottom: 4rem;
    color: white;
    h1,h2,h3{
        color: white;
        width : 80%;
        text-align: center;
        margin-left: 10%;
    }
    h1{
        font-size: 4.5rem;
    }
    h2{
        margin-top: 7rem;
        margin-bottom: 7rem;
        font-size: 2.5rem;
    }
    h3{
        padding: 3rem;
        font-size: 2rem;
    }
    form {
        width: 50%;
        height: 6rem;
        margin-top: 12rem;
        margin-left: 25%;
        display:flex;
        flex-direction:row;
        padding: 0;
    }
    input[type="text"] {
        padding-right: 50px;
        width: 100%;
        border-radius: 8px;
        border: none;
    }
    
    ::placeholder, input[type=text]{
        padding-left: 24px;
        font-size: 1.8rem;
    }

    input[type="submit"] {
        margin-top: 1.5rem;
        margin-left: -24%;
        width: 20%;
        height: 3rem;
        background: ${blue};
        color: white;
        border: none;
        border-radius: 8px;
        -webkit-appearance: none;
    }
`;

const TopLanguages = styled.div`
    width: 60%;
    margin-left: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap
    
    button{
        border: none;
        border: 2px solid white;
        background: transparent;
        color: white;
        padding-top: 2px;
        padding-bottom: 2px;
        padding-left: 48px;
        padding-right: 48px;
        margin: 32px;
        margin-top: 0;
        font-size: 2rem;
    }
`; 

const Main = () => {
    return (
        <StyledMain>
            <StyledHead>
                <h1> Learn Languages From All Over Ther World At Ease </h1>
                <h2> From our list of qualified tutors, learn any Language
                    of your choice via our online platform. 
                    Learning has never been easier.     
                </h2>
                <form>
                    <input type="text" placeholder="Search Courses"/>
                    <input type="submit" value="Search"/>
                </form>
                <h3> Top Languages </h3>
                <TopLanguages>
                    <button> Chiness </button>
                    <button> Chiness </button>
                    <button> Chiness </button>
                    <button> Chiness </button>
                    <button> Chiness </button>
                    <button> Chiness </button>
                    <button> Chiness </button>
                </TopLanguages>
            </StyledHead>
        </StyledMain>
    );
};

export default Main;
