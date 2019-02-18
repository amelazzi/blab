import React from 'react'
import styled from 'styled-components'
import { purple } from '../../../../../../styles/utilities/Colors'

import SimpleCollapsible from './elements/Collapsible'
import { DropdownItem } from 'styled-dropdown-component'

const StyleSideMenu = styled.div`
    width: 28rem;
    h1{
        font-size: 2rem;
        color: ${purple};
        padding: 1rem;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.84;
        letter-spacing: normal;
    }
`;

const StyledDropdownItem = styled(DropdownItem)`
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    font-weight: normal;
    padding-left: 1rem !important;
    :hover{
        cursor: pointer;
    }
`;

/*----------------------------- Variables --------------------------*/

var BasicClasses =[
    {name: "Basic_english_01 "},
    {name: "Basic_english_02 "},
    {name: "Basic_english_03 "},
];

const BasicClass = BasicClasses.map((BasicClass) =>
    <StyledDropdownItem key={BasicClass.name}>{BasicClass.name}</StyledDropdownItem>
);

const SideMenu = () => {
    return(
        <StyleSideMenu>
            <h1> All Classes </h1>
            <SimpleCollapsible />
            <SimpleCollapsible />
            <SimpleCollapsible />
        </StyleSideMenu>
    );
};

export default SideMenu;