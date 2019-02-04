import React from 'react';
import styled from 'styled-components';
import Head from './Head'

const StyledMain = styled.main`
    flex: 1;
`;

const Main = () => {
    return (
        <StyledMain>
            <Head></Head>
        </StyledMain>
    );
};

export default Main;
