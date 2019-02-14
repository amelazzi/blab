import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card'
import { gray, purple, lightGray } from '../../../../../styles/utilities/Colors';

const TabsContent = styled.div`
    display: flex;
    border-bottom: 1px solid ${gray};
    align-items: flex-start;
    padding: 1rem 2rem 1rem 4rem;
    button{
        border: none;
        font-size: 2.4rem;
        background: none;
        margin-right: 4rem;
    }
`;

const Courses = styled.div`
    padding: 6rem 4rem 0 2rem;
`;

const Course = styled.div`
    padding-bottom: 6rem;
`;

const MyEarning = styled.div`
    padding: 6rem 4rem 0 2rem;
`;

const EarningCard = styled.div`
    padding: 1.4rem 2.2rem; 
    border: 1px solid ${lightGray};
    display: grid;
    grid-template-columns: 1fr 1fr 1.2fr 0.8fr;
    box-shadow: 0 4px 4px 0 #3dec83;
    margin-top: 3rem;
    margin-bottom: 6rem;
`;

const EarningBalance = styled.div`
    border-right: 1px solid ${gray};
    :nth-child(3){
        border: none;
    }
    text-align: center;
    h2{
        font-size: 2.2rem;
    }
    p{
        font-size: 5rem;
        font-weight: bold;
    }
`;

const WithDrow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    button{
        width: 21.5rem;
        height: 6rem;
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        margin: 0 4rem;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin: 0;
        }
    }
`;

const TutorWallet = () => {
    return (
        <MyEarning> 
            <h1> Balance </h1>
            <EarningCard>
                <EarningBalance>
                    <h2> Available balance </h2>
                    <p> $300 </p>
                </EarningBalance>
                <EarningBalance>
                    <h2> Withdrawn</h2>
                    <p> $830 </p>
                </EarningBalance>
                <EarningBalance>
                    <h2> Pending Clearance </h2>
                    <p> $50 </p>
                </EarningBalance>
            </EarningCard>
            <h1> Analytics </h1>
            <EarningCard>
                <EarningBalance>
                    <h2> Total earning </h2>
                    <p> $2000 </p>
                </EarningBalance>
                <EarningBalance>
                    <h2> Total completed class </h2>
                    <p> 58 </p>
                </EarningBalance>
                <EarningBalance>
                    <h2> Earned this month </h2>
                    <p> $1800 </p>
                </EarningBalance>
            </EarningCard>
            <WithDrow>
                <h1> Withdrow </h1>
                <button>
                    <img src={require("../../../../../pictures/paypal.png")}/>
                </button>
                <button>
                    <img src={require("../../../../../pictures/paypal.png")}/>
                </button>
            </WithDrow>
        </MyEarning>
    );
};
export default TutorWallet;
