import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card'
import { gray, purple } from '../../../../../styles/utilities/Colors';

const TabsContent = styled.div`
    display: flex;
    border-bottom: 1px solid ${gray};
    align-items: flex-start;
    padding: 1rem 2rem 1rem 4rem;
    button{
        border: none;
        font-size: 2.4rem;
        background: none;
        margin-right: 4rem;
    }
`;

const Courses = styled.div`
    padding: 6rem 4rem 0 2rem;
`;

const Course = styled.div`
    padding-bottom: 6rem;
`;

const Wallet = styled.div`
    padding: 6rem 4rem 0 2rem;
`;

const CreditAccount = styled.div`
    padding-top: 4rem;   
`;

const Balance = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid ${gray};
    h2{
        padding: 3rem 0 0 0;
        font-size: 2.2rem;
    }
    p{
        padding-left: 4rem;
        font-size: 5rem;
        font-weight: bold;
    }
`;

const Fab = styled.button`
    background: ${purple};
    border: none;
    border-radius: 100%;
    padding: 0;
    width: 8rem;
    height: 8rem;
    margin-left: 92%;
    color: white;
    font-size: 3.8rem;
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
                <TabsContent>
                    <button onClick={() => this.setState({ activeTab: 1 })}> 
                        My Course </button>
                    <button onClick={() => this.setState({ activeTab: 2 })}> 
                        My Wallet </button>
                </TabsContent>
                <div>
                    {this.state.activeTab == 1 ? (
                        <Courses>
                            <Course>
                                <h1> Next class </h1>
                                <Card tutorPic={require("../../../../../pictures/profile.png")}
                                    tutorName="John Doe"
                                    className="English"/>
                            </Course>
                            <Course>
                                <h1> Missed class </h1>
                                <Card tutorPic={require("../../../../../pictures/profile.png")}
                                    tutorName="John Doe"
                                    className="English"/>
                            </Course>
                            <Fab> + </Fab>
                        </Courses>) : 
                        (<Wallet>
                            <Balance>
                                <h1> Balance </h1>
                                <h2> Available balance </h2>
                                <p> $300 </p>
                            </Balance>
                            <CreditAccount>
                                <h1> Credit Account </h1>
                            </CreditAccount>
                        </Wallet>
                    )}
                </div>
            </>
        );
    }
}
export default Tabs;