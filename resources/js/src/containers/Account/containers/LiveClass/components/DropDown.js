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
    background: ${purple};
    color: white;
    text-align: left;
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-shadow: none;
    font-size: 1.9rem;
    border: none;
    border-radius: 0;
    margin-bottom: 0.2rem;
    &:hover{
        background: ${purple} !important;
        border: none !important; 
        border-radius: 0 !important;
        color: white;
    }
`;

const StyledDropdownMenu = styled(DropdownMenu)`
    width: 100%;
    border: none;
    border-radius: 0px;
    font-size: 1.9rem;
    box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
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
          {this.props.classType}
        </StyledButton>
        <StyledDropdownMenu hidden={hidden}>
            {this.props.args}
        </StyledDropdownMenu>
      </Dropdown>
    );
  }
};

export default SimpleDropdown;