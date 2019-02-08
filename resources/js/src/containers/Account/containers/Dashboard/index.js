import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Card from './components/Card'


const StyledDashboard  = styled.div`
    width: 75%;
    padding: 0;
`;

const Input = styled.input`
    &:nth-child(1){
        width: 65%;
    }
`;

const InputContent = styled.div`
    display: flex;
`;

const TabsContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 4rem;
    button{
        border: none;
        font-size: 2rem;
    }
`;

const Course = styled.div`
    padding: 6rem 4rem 6rem 2rem;
    h1{
        padding-left: 2rem;
        font-size: 3rem;
    }
`;

const Dashboard = () => {
    return (
        <StyledDashboard>
            <InputContent>
                <Input type="text" placeholder="Type to search" />
                <Input type="text" placeholder="Sort" />
            </InputContent>
            <TabsContent>
                <button> My Course </button>
                <button> My Wallet </button>
            </TabsContent>
            <Course>
                <h1> Next class </h1>
                <Card tutorPic={require("../../../../pictures/profile.png")}
                    tutorName="John Doe"
                    className="English"/>
            </Course>
        </StyledDashboard>
    );
};

export default Dashboard;
