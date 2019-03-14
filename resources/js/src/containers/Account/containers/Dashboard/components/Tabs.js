import React, { Component } from 'react';
import styled from 'styled-components';

import { light, pink, darkGreen } from '../../../../../styles/utilities/Colors';

import Card from './Card'
import TutorWallet from './TutorWallet'
import StudenWallet from './StudentWallet'


const TabsButton = styled.div`
    display: flex;
    border-bottom: 1px solid ${light};
    align-items: flex-start;
    padding: 1rem 2rem 1rem 4rem;
    button{
        border: none;
        font-size: 2.4rem;
        background: none;
        margin-right: 4rem;
    }
`;

const TabsContent = styled.div`
    padding: 0rem 3rem;
    h2{
        margin-top: 1rem;
        font-size: 3rem;
        font-weight: 500;
        line-height: 1.7;
        margin-left: 2rem;
    }
`;

const Cards = styled.div`
    margin-top: 5rem;
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
            <>
                <TabsButton>
                    <button onClick={() => this.setState({ activeTab: 1 })}> 
                        My Course </button>
                    <button onClick={() => this.setState({ activeTab: 2 })}> 
                        My Wallet </button>
                </TabsButton>
                <TabsContent>
                    <h2> Welcome</h2>
                    {this.state.activeTab == 1 ? (
                        <Cards>
                            <Card title="WELCOME BLABEES"
                                content="Search for a babber now to begin receiving classes. click on the icon below to proceed"
                                fabColor={pink}/>
                            <Card title="UPDATE YOUR PROFILE"
                                content="Update your profile and add a profile picture from the icon above,or click on the icon below to proceed"
                                fabColor={darkGreen}/>
                        </Cards>
                    ) : 
                        (
                            <StudenWallet></StudenWallet>
                    )}
                </TabsContent>
            </>
        );
    }
}
export default Tabs;
