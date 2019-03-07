import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
    flex: 1;
`;

const Main = ({children, props}) => {
    return (
        <>
            {children}
        </>
    );
};

export default Main;
