import React from 'react';
import styled from 'styled-components'
import Tabs from '../../components/Tabs'
import { purple } from '../../../../styles/utilities/Colors';


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

const Dashboard = () => {
    return (
        <StyledDashboard>
            <InputContent>
                <Input type="text" placeholder="Type to search" />
                <Input type="text" placeholder="Sort" />
            </InputContent>
            <Tabs/>
            
        </StyledDashboard>
    );
};

export default Dashboard;

