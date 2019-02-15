import React from 'react'
import styled from 'styled-components'

import {lightGray, gray, dark} from '../../../../styles/utilities/Colors'

import SideBar from './components/SideBar/SideBar'
import CourseCard from './components/CourseCard'

const StyledProfil = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
`;

const ProfileContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;



const TutorProfile = () => {
    return(
        <StyledProfil>
            <SideBar/>
            <ProfileContent>
                <CourseCard picture={require("../../../../pictures/lifestyle.png")}
                    title="Lifestyle" classNbr="10" seenNbr="29" likeNbr="7" disLikeNbr="5"/>
            </ProfileContent>
        </StyledProfil>
    );
};

export default TutorProfile;