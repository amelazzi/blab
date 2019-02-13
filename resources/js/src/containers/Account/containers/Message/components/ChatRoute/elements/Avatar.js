import React from 'react'
import styled from 'styled-components'

import michealWong from '../../../assets/micheal-wong.png'
import gusFringAndWalterWhite from '../../../assets/Gus-Fring-Walter-White.png'
import gusFring from '../../../assets/Gus-Fring.png'
import walterWhite from '../../../assets/Walter-White.png'

const avatars = {
  'micheal-wong.png': michealWong,
  'Gus-Fring-Walter-White.png': gusFringAndWalterWhite,
  'Gus-Fring.png': gusFring,
  'Walter-White.png': walterWhite,
}

const StyledContainer = styled.div`
  width: 30vh;
  height: 30vh;
  background: red;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledInner = styled.div`
  width: 75%;
  height: 75%;
  background: red;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled.img`
  width: 75%;
  height: 75%;
`

const Avatar = ({ contact }) => {
    return(
        <StyledContainer>
            <StyledInner>
            <StyledImage src={avatars[contact.avatar]} />
            </StyledInner>
        </StyledContainer>
    );
};

export default Avatar;