import React from 'react'
import styled from 'styled-components'
import AddIcon from '../../../assets/add.png'
import MicroIcon from '../../../assets/micro.png'
import MoreIcon from '../../../assets/more.png'
import PhoneIcon from '../../../assets/phone.png'
import VideoIcon from '../../../assets/video.png'
import { dark } from '../../../../../../../styles/utilities/Colors'

const StyledContainer = styled.div`
  width: 40vh;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5vh;
`

const StyledRed = styled.div`
  width: 3.8rem;
  min-width: 3.8rem;
  height: 3.8rem;
  background: ${dark};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledOuter = styled.div`
  padding: 1rem;
  background: ${({ highlight }) =>
    highlight ? 'rgba(255, 255, 255, 0.07)' : 'transparent'};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s background-color ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }
`

const StyledIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  object-fit: contain;
`
const Actions = () => {
  return (
    <StyledContainer>
      <StyledOuter>
        <StyledIcon src={MicroIcon} />
      </StyledOuter>
      <StyledOuter>
        <StyledIcon src={VideoIcon} />
      </StyledOuter>
      <StyledOuter highlight>
        <StyledRed>
          <StyledIcon src={PhoneIcon} />
        </StyledRed>
      </StyledOuter>
      <StyledOuter>
        <StyledIcon src={AddIcon} />
      </StyledOuter>
      <StyledOuter>
        <StyledIcon src={MoreIcon} />
      </StyledOuter>
    </StyledContainer>
  );
};

export default Actions;