import React, { Component } from 'react';
import styled from 'styled-components';
import { pink, light } from '../../../../../styles/utilities/Colors';
import ClassCard from './ClassCard'

const StyledClass = styled.div`
    background: white;
`;

const TabsContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    border-bottom: 1px solid ${light};
    button{
        border: none;
        font-size: 2.4rem;
        background: none;
        padding-bottom: 1rem;
        :hover{
            cursor: pointer;
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

const CurrentClasses = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem;
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
                    <input type="text" placeholder="Type to search" />
                    <button onClick={() => this.setState({ activeTab: 1 })}> 
                        Current </button>
                    <button onClick={() => this.setState({ activeTab: 2 })}> 
                        Completed </button>
                    <button onClick={() => this.setState({ activeTab: 3 })}> 
                        Downloaded </button>
                    <input type="text" placeholder="Sort" />
                </TabsContent>
                <div>
                    {this.state.activeTab == 1 ? (
                        <CurrentClasses>
                            <ClassCard blabberName="Mark John"
                                className="English Language"
                                timeLeft="10min"/>
                        </CurrentClasses>) : this.state.activeTab == 2?
                        ( 
                        <div>
                        </div>):
                        ( 
                            <div>
                                <h1> Hello from tab 3 </h1>
                            </div>
                    )}
                </div>
            </StyledClass>
        );
    }
}
export default Tabs;
