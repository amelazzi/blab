import React from 'react'
import Avatar from './elements/Avatar'
import Actions from './elements/Action'
import Chat from './elements/Chat'
import Status from './elements/Status'

import {
  purple,
  pink,
  dark,
  lightGray,
  blue,
  orange,
} from '../../../../../../styles/utilities/Colors'

import styled from 'styled-components'

const StyledContaier = styled.div`
  background: red;
  display: block;
  width: 100%;
  height: 72rem;
  box-sizing: border-box;
  position: relative;
  * {
    box-sizing: border-box;
  }
`;

const StyledHeader = styled.div`
  background: orange;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.5rem solid rgba(200, 200, 200, 0.2);
  p {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: ${dark};
    padding: 0 1rem 0 0;
  }
`;

const StyledDisk = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${purple};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.35rem;
`;
const StyledInnerDisk = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  background: ${pink};
  border-radius: 100%;
`;

const StyledBody = styled.div`
  width: 100%;
  padding: 1rem 1rem;
`;

const StyledLeftRow = styled.div`
  width: auto;
  color: ${dark};
  margin-bottom: 1rem;
  p {
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }
`;

const StyledLeftMessage = styled.p`
  display: table;
  background: ${lightGray};
  padding: 0.7rem 1rem !important;
  border-radius: 0.5rem;
  margin-top: 0.5rem !important;
`;

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${lightGray};
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${dark};
    font-size: 1rem;
    background: white;
    padding: 0 2rem;
  }
`;

const StyledRightRow = styled(StyledLeftRow)`
  p {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    color: white;
    small {
      color: ${dark};
    }
  }
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-flow: nowrap column;
`;

const StyledRightMessage = styled(StyledLeftMessage)`
  background: ${blue};
`;

const StyledWriting = styled(StyledDivider)`
  background: transparent;
  color: ${orange};
  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  small {
    padding: 0 1rem;
    display: block;
  }
  span {
    font-size: 2rem;
    padding: 0;
    margin: 0 0 0.5rem 0;
    animation: writing 1s infinite;
    display: block;
    &:nth-child(2) {
      animation: writing 1s 0.3s infinite;
    }
    &:nth-child(3) {
      animation: writing 1s 0.6s infinite;
    }
  }
  @keyframes writing {
    from {
      transform: translateY(-1.1rem);
    }
    to {
      transform: translateY(0rem);
    }
  }
`;

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-top: 0.1rem solid rgba(200, 200, 200, 0.2);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  input {
    color: ${orange};
    background: ${lightGray};
    outline: 0;
    border: 0;
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 0.5rem;
  }
`;

const StyledIconButton = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  filter: grayscale(100%);
  opacity: 0.8;
  position: absolute;
  right: 5rem;
  cursor: pointer;
  &:first-of-type {
    right: 1.5rem;
  }
  * {
    padding: 0;
    margin: 0;
  }
`;

const CallRoute = () => {
  return (
    <StyledContaier>
      <StyledHeader>
        <p>Micheal Wong</p>
        <StyledDisk>
          <StyledInnerDisk />
        </StyledDisk>
      </StyledHeader>
      <StyledBody>
        <StyledLeftRow>
          <p>
            <small>Yesterday, 8:19 PM</small>
          </p>
          <StyledLeftMessage>
            I thought this would be an awesome way to interact with the
            interface.
          </StyledLeftMessage>
        </StyledLeftRow>
        <StyledRightRow>
          <p>
            <small>Yesterday 8:20 PM</small>
          </p>
          <StyledRightMessage>
            I agree! It definitely produces a better user experience.
          </StyledRightMessage>
        </StyledRightRow>
        <StyledDivider>
          <p>
            <small>Today</small>
          </p>
        </StyledDivider>
        <StyledLeftRow>
          <p>
            <small>7:40 PM</small>
          </p>
          <StyledLeftMessage>
            Did you get that awesomesauce I sent?
          </StyledLeftMessage>
        </StyledLeftRow>
        <StyledRightRow>
          <p>
            <small>7:46 PM</small>
          </p>
          <StyledRightMessage>
            I did, our whole team rubbed it allll over their bread.
          </StyledRightMessage>
          <StyledRightMessage>It was delicious!</StyledRightMessage>
        </StyledRightRow>
        <StyledLeftRow>
          <p>
            <small>7:47 PM</small>
          </p>
          <StyledLeftMessage>Awesome!</StyledLeftMessage>
        </StyledLeftRow>
        <StyledRightRow>
          <p>
            <small>7:48 PM</small>
          </p>
          <StyledRightMessage>Yeah, we all loved it!</StyledRightMessage>
        </StyledRightRow>

        <StyledWriting>
          <p>
            <small>Michael Wong is typing</small>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        </StyledWriting>
      </StyledBody>
      <StyledFooter>
        <input placeholder="Message Michael" />
        <StyledIconButton>
          <p>😄</p>
        </StyledIconButton>
        <StyledIconButton>
          <p>✈</p>
        </StyledIconButton>
      </StyledFooter>
    </StyledContaier>
  );
};

export default CallRoute;