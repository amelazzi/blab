import React from 'react';
import styled from 'styled-components'
import BlabberCard from './components/BlabberCard'

const StyledBlabber  = styled.div`
    width: 75%;
    padding: 2rem 2rem 0 2rem;
    padding-bottom: 12rem;
`;

const StyledH1 = styled.h1`
    padding: 2rem;
    padding-left: 4rem;
    font-size: 3rem;
`;


const Input = styled.input`
    margin: 0;
    &:nth-child(1){
        width: 65%;
    }
    &:nth-child(2){
        width: 30%;
    }
`;

const InputContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
`;

const RecentBlabbers = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const RcmdBlabbers = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;




const Blabber = () => {
    return (
        <StyledBlabber>
            <InputContent>
                <Input type="text" placeholder="Type to search" />
                <Input type="text" placeholder="Sort" />
            </InputContent>
            <StyledH1> Recent </StyledH1>
            <RecentBlabbers>
                <BlabberCard blabberName="Mark John"
                    classNbr="27"/>
                <BlabberCard blabberName="Mark John"
                    classNbr="27"/>
                <BlabberCard blabberName="Mark John"
                    classNbr="27"/>
            </RecentBlabbers>
            <StyledH1> Recommended </StyledH1>
            <RcmdBlabbers>
                <BlabberCard blabberName="Mark John"
                    classNbr="27"/>
                <BlabberCard blabberName="Mark John"
                    classNbr="27"/>
                <BlabberCard blabberName="Mark John"
                    classNbr="27"/>
            </RcmdBlabbers>
        </StyledBlabber>
    );
};

export default Blabber;

