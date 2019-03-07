import React, {Component} from 'react';
 
import { Button } from 'styled-button-component';
import styled from 'styled-components'
import { dark , gray, lightGray, light} from '../../../../../styles/utilities/Colors'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from 'styled-dropdown-component';
 

const StyledButton = styled(Button)`
    background: white;
    text-align: left;
    display: flex;
    padding-left: 0;
    padding-right: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-shadow: none;
    color: ${gray};
    font-size: 1.9rem;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${light};
    &:hover{
        background: white !important;
        border: none !important; 
        border-radius: 0 !important;
        border-bottom: 1px solid ${lightGray} !important;
        color: ${gray};
    }
`;

const StyledDropdownMenu = styled(DropdownMenu)`
    width: 100%;
    border: none;
    border-radius: 0px;
    font-size: 1.9rem;
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
          Dropdown Button
        </StyledButton>
        <StyledDropdownMenu hidden={hidden}>
            {this.props.args}
        </StyledDropdownMenu>
      </Dropdown>
    );
  }
};

export default SimpleDropdown;