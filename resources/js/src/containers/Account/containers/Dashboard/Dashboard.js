import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const StyledDashboard  = styled.div`
    width: 75%;
    background: red;
    padding: 0;
`;

const Dashboard = () => {
    return (
        <StyledDashboard>
            <input type="text" placeholder="Type to search" />
        </StyledDashboard>
    );
};

export default Dashboard;
