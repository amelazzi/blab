import React, {Component} from 'react'
import styled from 'styled-components'
import Scrollbar from 'react-custom-scrollbars'
import { Button } from 'styled-button-component'
import { Dropdown, DropdownMenu} from 'styled-dropdown-component'

import { dark } from '../../../styles/utilities/Colors'
 

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
        cursor: pointer;
    }
`;

const StyledDropdownMenu = styled(DropdownMenu)`
    width: 100%;
    border: none;
    margin: 0;
`;

class SimpleDropdown extends Component {
  constructor(props) {
    super();
    this.state = {
      hidden: false,
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
            onClick={() => this.handleOpenCloseDropdown()}>
            {this.props.type}
            </StyledButton>
            <StyledDropdownMenu hidden={hidden}>
                <Scrollbar style={ {width: '100%', height: '75vh'} }>
                    {this.props.args}
                </Scrollbar>
            </StyledDropdownMenu>
        </Dropdown>
    );
  }
};

export default SimpleDropdown;