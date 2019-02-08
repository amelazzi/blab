import React from 'react';
import styled from 'styled-components';
const StyledSideBar = styled.aside`
    background: rgba(0, 0, 0, 0.3);
`;
const SideBar = ({ children }) => {
    return <StyledSideBar>{children}</StyledSideBar>;
};

export default SideBar;
