import React from 'react'
import styled from 'styled-components'
import { pink, purple } from '../../../../../../../styles/utilities/Colors'

const StyledContainer = styled.div`
  min-width: 20vh;
  height: 14vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    color: white;
  }
`

const StyledDisk = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${purple};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.35rem;
`
const StyledInnerDisk = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  background: ${pink};
  border-radius: 100%;
`

const Status = ({ contact }) => {
    return(
        <StyledContainer>
            <p>{contact.name}</p>
            <StyledDisk>
            <StyledInnerDisk />
            </StyledDisk>
        </StyledContainer>
    );
};

export default Status;