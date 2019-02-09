
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {purple, dark, lightGray} from '../../../styles/utilities/Colors'

const Tabs = () => {
    state = {
        activeTab: 1
    }
        return (
            <>
                <>
                    <button onClick={() => this.setState({ activeTab: 1})}>tab1</button>
                    <button onClick={() => this.setState({ activeTab: 2})}>tab2</button>
                    <button onClick={() => this.setState({ activeTab: 3})}>tab3</button>
                </>
                <>
                    {
                        state.activeTab == 1 ? <div> tab 1 content </div> : state.activeTab == 2 ?
                        <div> tab 2 content </div> :
                        <div> tab 3 content </div>
                    }
                </>
            </>
        );
};

export default Tabs;