import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { purple, dark, lightGray } from '../../../styles/utilities/Colors';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabs: []
        };
    }
    render() {
        return (
            <>
                <div>
                    <button onClick={() => this.setState({ activeTab: 1 })}>
                        tab1
                    </button>
                    <button onClick={() => this.setState({ activeTab: 2 })}>
                        tab2
                    </button>
                    <button onClick={() => this.setState({ activeTab: 3 })}>
                        tab3
                    </button>
                </div>
                <div>
                    {this.state.activeTab == 1 ? (
                        <div> tab 1 content </div>
                    ) : this.state.activeTab == 2 ? (
                        <div> tab 2 content </div>
                    ) : (
                        <div> tab 3 content </div>
                    )}
                </div>
            </>
        );
    }
}
export default Tabs;
