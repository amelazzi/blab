import React from 'react';
import styled from 'styled-components';
import Head from './Head'

const StyledMain = styled.main`
    flex: 1;
    background: white;
`;

const Main = ({children, props}) => {
    return (
        <>
            {children}
        </>
    );
};

export default Main;
