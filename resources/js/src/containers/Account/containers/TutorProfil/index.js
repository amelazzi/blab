import React from 'react'
import styled from 'styled-components'

import {lightGray, gray, dark} from '../../../../styles/utilities/Colors'

import SideBar from './components/SideBar/SideBar'

const StyledProfil = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
`;


const TutorProfile = () => {
    return(
        <StyledProfil>
            <SideBar/>
            <h1> Hello from Tutor Profil </h1>
        </StyledProfil>
    );
};

export default TutorProfile;