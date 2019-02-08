import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { lightGray } from '../../styles/utilities/Colors'

import Main from './components/Main'
import SidBar from './components/SideBar'

const StyledAccount  = styled.div`
`;

const Account = () => {
    return (
        <StyledAccount> 
            <Main>
                <SidBar/>
            </Main>
        </StyledAccount>
    );
};

export default Account;
