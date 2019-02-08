import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { lightGray } from '../../styles/utilities/Colors'
import Main from './components/Main'
import Head from './components/Head'

const GettingStartedStudent = () => {
    return (
        <> 
            <Main>
                <Head/>
            </Main>
        </>
    );
};

export default GettingStartedStudent;
