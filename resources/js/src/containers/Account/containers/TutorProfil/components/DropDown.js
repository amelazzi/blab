import React, {Component} from 'react';
 
import { Button } from 'styled-button-component';
import styled from 'styled-components'
import { dark , gray, lightGray, light, purple} from '../../../../../styles/utilities/Colors'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from 'styled-dropdown-component';
 

const StyledButton = styled(Button)`
    background: white;
    margin: 0;
    margin-left: 6rem;
    color: ${dark};
    padding: 0rem 3rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-shadow: none;
    font-size: 1.9rem;
    border: 1px solid ${dark};
    border-radius: 8px;
    margin-bottom: 0.2rem;
    &:hover{
        background: white !important;
        border: 1px solid ${dark} !important; 
        border-radius: 8px !important;
        color: ${dark};
    }
`;

const StyledDropdownMenu = styled(DropdownMenu)`
    width: 100%;
    border: none;
    border-radius: 0px;
    font-size: 1.9rem;
    border: 1px solid ${gray};
    margin-top: 0;
`;

class SimpleDropdown extends Component {
  constructor(props) {
    super();
    this.state = {
      hidden: true,
    };
  }
 
  handleOpenCloseDropdown() {
      this.setState({
        hidden: !this.state.hidden,
      });
  }
 
  render() {
    const { hidden } = this.state;
    return (
      <Dropdown>
        <StyledButton
          secondary
          dropdownToggle
          onClick={() => this.handleOpenCloseDropdown()}
        >
          Recent
        </StyledButton>
        <StyledDropdownMenu hidden={hidden}>
            <DropdownItem> Hello </DropdownItem>
            <DropdownItem> Salut </DropdownItem>
        </StyledDropdownMenu>
      </Dropdown>
    );
  }
};

export default SimpleDropdown;