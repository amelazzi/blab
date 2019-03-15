import React, { Component } from 'react';
import styled from 'styled-components';
import { gray, light, dark } from '../../../../../styles/utilities/Colors';

const TabsContent = styled.div`
    display: flex;
    border-bottom: 1px solid ${light};
    align-items: flex-start;
    margin-top: 10.5rem;
    button{
        border: none;
        font-size: 2.6rem;
        background: none;
        font-weight: 600;
        margin-right: 6.6rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;


const About = styled.div`
    height: 36rem;
    padding: 0.8rem 0 0 0;
    p{
        color: ${dark};
        font-size: 24px;
        font-weight: normal;
    }
`;

const StyledIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    margin-top: -0.2rem;
    margin-right: 1rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Review = styled.div`
    height: 36rem;
    padding: 0.8rem 0 0 0;
    p{
        color: ${dark};
        font-size: 24px;
        font-weight: normal;
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
            <>
                <TabsContent>
                    <button onClick={() => this.setState({ activeTab: 1 })}> 
                        <StyledIcon>
                            <img src={require("../../../../../pictures/avatar.png")} />
                        </StyledIcon>
                        About 
                    </button>
                    <button onClick={() => this.setState({ activeTab: 2 })}> 
                        Review </button>
                </TabsContent>
                <div>
                    {this.state.activeTab == 1 ? (
                        <About>
                            <p> This is where the profile description goes 
                                This is where the profile description goes  
                                This is where the profile description goes 
                                This is where the profile description goes  
                            </p>
                        </About>) : 
                        (<Review>
                            <p> Review Content </p>
                        </Review>
                    )}
                </div>
            </>
        );
    }
}
export default Tabs;
