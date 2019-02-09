import React, { Component } from 'react';
import styled from 'styled-components';
import { gray, purple, lightGray } from '../../../../../styles/utilities/Colors';
import ClassCard from './ClassCard'

const StyledClass = styled.div`
    background: white;
`;

const TabsContent = styled.div`
    display: flex;
    justify-content: space-between;
    button{
        border: none;
        font-size: 2.4rem;
        background: none;
        margin-top: 0.3rem;
        border-bottom: 1px solid ${lightGray};
    }
    input{
        margin: 0 !important;
    }
`;

const CurrentClasses = styled.div`
    display: flex;
    justify-content: center;
    padding: 6rem;
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
                            <h1> Hello from tab 2 </h1>
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
