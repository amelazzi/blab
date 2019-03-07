import React from 'react'
import styled from 'styled-components'

import SideBar from './components/SideBar'
import SideMenu from './components/SideMenu/SideMenu'
import WatchingClass from './components/watchinClass/WatchingClass'

const StyledLiveClass = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    background: white;
`;

const GlobalContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 94%;
    padding: 3rem 0 0 2rem;
    input{
        border: none !important;
        margin: 0 !important;
        margin-bottom: 0.5rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const LiveClass = () => {
    return(
        <StyledLiveClass>
            <SideBar/>
            <GlobalContainer>
                <input type="text"  placeholder="Type to search"/>
                <Container>
                    <SideMenu/>
                    <WatchingClass/>
                </Container>
            </GlobalContainer>
        </StyledLiveClass>
    );
};

export default LiveClass;

