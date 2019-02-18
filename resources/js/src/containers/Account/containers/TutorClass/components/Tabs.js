import React , { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { pink, light, lightPurple, blue, purple, dark } from '../../../../../styles/utilities/Colors';
import CourseCard from '../../TutorProfil/components/CourseCard'

const StyledClass = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
`;

const TabsContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    padding: 0.6rem 5rem 0.6rem 7rem;
    background: white;
    width: 100%;
    z-index: 3;
    box-shadow: 0 5px 5px -5px #333;
    button{
        border: none;
        font-size: 2.4rem;
        background: none;
        :hover{
            cursor: pointer;
        }
        :nth-child(2){
            margin-left: 4rem;
        }
    }
    input{
        margin: 0 !important;
        border: none;
        :first-child{
            width: 18%;
        }
    }
`;

const StyledBtn = styled.button`
    border: 2px solid ${purple} !important;
    border-radius: 11px  !important;
    padding: 0.3rem 2rem;
`;

const TabsBody = styled.div`
    background: ${lightPurple};
    z-index: 0;
`;

const CurrentClasses = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 2rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${dark};
    :hover{
        text-decoration: none;
        color: ${dark};
    }
`;

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabs: []
        };
        this.state.activeTab=1
    }
    render() {
        return (
            <StyledClass>
                <TabsContent>
                    <div>
                        <button onClick={() => this.setState({ activeTab: 1 })}> 
                            My Class </button>
                        <button onClick={() => this.setState({ activeTab: 2 })}> 
                            Lesson Plan </button>
                    </div>
                    <StyledBtn> 
                        Blab Academy </StyledBtn>
                </TabsContent>
                <TabsBody>
                    {this.state.activeTab == 1 ? (
                        <CurrentClasses>
                            <StyledLink to="/account/">
                                <CourseCard picture={require("../../../../../pictures/lifestyle.png")}
                                    title="Lifestyle" classNbr="10" seenNbr="29" likeNbr="7" disLikeNbr="5"/>
                            </StyledLink>
                            <StyledLink to="/account/">
                                <CourseCard picture={require("../../../../../pictures/lifestyle.png")}
                                    title="Lifestyle" classNbr="10" seenNbr="29" likeNbr="7" disLikeNbr="5"/>
                            </StyledLink>
                            <StyledLink to="/account/">
                                <CourseCard picture={require("../../../../../pictures/lifestyle.png")}
                                    title="Lifestyle" classNbr="10" seenNbr="29" likeNbr="7" disLikeNbr="5"/>
                            </StyledLink>
                        </CurrentClasses>) : 
                        ( 
                        <div>
                            <h1> Hello from tab 2 </h1>
                        </div>)}
                </TabsBody>
            </StyledClass>
        );
    }
}
export default Tabs;
