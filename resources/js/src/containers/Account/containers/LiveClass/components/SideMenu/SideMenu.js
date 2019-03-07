import React from 'react'
import styled from 'styled-components'
import Scrollbar from 'react-custom-scrollbars'

import { purple } from '../../../../../../styles/utilities/Colors'

import SimpleCollapsible from './elements/Collapsible'
import PopularCourse from './elements/PopularCourse'

const StyleSideMenu = styled.div`
    width: 28rem;
`;

const StyledH1 = styled.h1`
    font-size: 2rem;
    color: ${purple};
    padding: 1rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.84;
    letter-spacing: normal;
    &:last-of-type{
        margin-top: 3rem;
    }
`;


/*----------------------------- Variables --------------------------*/

var BasicClasses =[
    {name: "Basic_english_01 "},
    {name: "Basic_english_02 "},
    {name: "Basic_english_03 "},
];

const BasicClass = BasicClasses.map((BasicClass) =>
    <p key={BasicClass.name}>{BasicClass.name}</p>
);

const SideMenu = () => {
    return(
        <StyleSideMenu>
            <StyledH1> Current Course</StyledH1>
            <SimpleCollapsible trigger="OnBroad Study" arg={BasicClass} />
            <StyledH1> Popular Courses </StyledH1>
            <Scrollbar style={ {width: '100%', height: '170rem'} }>
                <PopularCourse picture={require("../../../../../../pictures/lifestyle.png")} 
                    title="Homework Help" classNbr="10"/>
                <PopularCourse picture={require("../../../../../../pictures/lifestyle.png")} 
                    title="Homework Help" classNbr="10"/>
                <PopularCourse picture={require("../../../../../../pictures/lifestyle.png")} 
                    title="Homework Help" classNbr="10"/>
                <PopularCourse picture={require("../../../../../../pictures/lifestyle.png")} 
                    title="Homework Help" classNbr="10"/>
                <PopularCourse picture={require("../../../../../../pictures/lifestyle.png")} 
                    title="Homework Help" classNbr="10"/>
                <PopularCourse picture={require("../../../../../../pictures/lifestyle.png")} 
                    title="Homework Help" classNbr="10"/>
                <PopularCourse picture={require("../../../../../../pictures/lifestyle.png")} 
                    title="Homework Help" classNbr="10"/>
                <PopularCourse picture={require("../../../../../../pictures/lifestyle.png")} 
                    title="Homework Help" classNbr="10"/>
            </Scrollbar>
        </StyleSideMenu>
    );
};

export default SideMenu;