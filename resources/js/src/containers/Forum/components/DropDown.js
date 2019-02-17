import React, {Component} from 'react';
 
import { Button } from 'styled-button-component';
import styled from 'styled-components'
import { dark , gray, lightGray, light, purple} from '../../../styles/utilities/Colors'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from 'styled-dropdown-component';
 

const StyledButton = styled(Button)`
    background: white;
    margin: 0;
    color: ${dark};
    justify-content: space-between;
    align-items: center;
    border: none !important; 
    box-shadow: none;
    font-size: 2.8rem;
    margin-bottom: 0.2rem;
    &:hover{
        background: white !important;
        border: none !important; 
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
          Latest
        </StyledButton>
        <StyledDropdownMenu hidden={hidden}>
            <DropdownItem> Top </DropdownItem>
            <DropdownItem> Favoris </DropdownItem>
        </StyledDropdownMenu>
      </Dropdown>
    );
  }
};

export default SimpleDropdown;