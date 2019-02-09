import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Card from './components/Card'
import { gray, dark } from '../../../../styles/utilities/Colors';


const StyledDashboard  = styled.div`
    width: 75%;
    padding-bottom: 12rem;
    background: white;
    h1{
        padding-left: 2rem;
        font-size: 3rem;
    }
`;

const Input = styled.input`
    &:nth-child(1){
        width: 68%;
    }
`;

const InputContent = styled.div`
    display: flex;
`;

const TabsContent = styled.div`
    display: flex;
    margin-left: 2rem;
    margin-right: 2rem;
    border-bottom: 1px solid ${gray};
    align-items: flex-start;
    padding: 0 1rem 1rem 2rem;
    button{
        border: none;
        font-size: 2.4rem;
        background: none;
        margin-right: 4rem;
    }
`;

const Courses = styled.div`
    background: white;
    padding: 6rem 4rem 0 2rem;
`;

const Course = styled.div`
    padding-bottom: 6rem;
`;

const Wallet = styled.div`
    padding: 6rem 4rem 0 2rem;
`;

const CreditAccount = styled.div`
    padding-top: 4rem;   
`;

const Balance = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid ${gray};
    h2{
        padding: 3rem 0 0 0;
        font-size: 2.2rem;
    }
    p{
        padding-left: 4rem;
        font-size: 5rem;
        font-weight: bold;
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
            <Courses>
                <Course>
                    <h1> Next class </h1>
                    <Card tutorPic={require("../../../../pictures/profile.png")}
                        tutorName="John Doe"
                        className="English"/>
                </Course>
                <Course>
                    <h1> Missed class </h1>
                    <Card tutorPic={require("../../../../pictures/profile.png")}
                        tutorName="John Doe"
                        className="English"/>
                </Course>
            </Courses>

            <Wallet>
                <Balance>
                    <h1> Balance </h1>
                    <h2> Available balance </h2>
                    <p> $300 </p>
                </Balance>
                <CreditAccount>
                    <h1> Credit Account </h1>
                </CreditAccount>
            </Wallet>
        </StyledDashboard>
    );
};

export default Dashboard;

