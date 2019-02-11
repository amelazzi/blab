import React from 'react';
import styled from 'styled-components';
import { gray } from '../../../../../styles/utilities/Colors';

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

const Payment = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
    margin-top: 8.7rem;
    margin-left: 9.4rem;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 8rem;
    button{
        width: 21.5rem;
        height: 6rem;
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin: 0;
        }
    }
    p{
        font-size: 25px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.7;
        margin-top: 3.6rem;
    }
`;

const StudentWallet = () => {
    return (
        <Wallet>
            <Balance>
                <h1> Balance </h1>
                <h2> Available balance </h2>
                <p> $300 </p>
            </Balance>
            <CreditAccount>
                <h1> Credit Account </h1>
                <Payment>
                    <Content>
                        <button>
                            <img src={require("../../../../../pictures/paypal.png")}/>
                        </button>
                        <p> Paypal Account </p>
                    </Content>
                    <Content>
                        <button>
                            <img src={require("../../../../../pictures/paypal.png")}/>
                        </button>
                        <p> Credit Card </p>
                    </Content>
                </Payment>
            </CreditAccount>
        </Wallet>
    );
};
export default StudentWallet;