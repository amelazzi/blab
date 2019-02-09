import React from 'react';
import styled from 'styled-components';

import Main from './components/Main';
import Head from './components/Head';
import Form from './components/Form';

const StyledContactUs = styled.div`
    background: white;
`;

const ContactUs = () => {
    return (
        <StyledContactUs>
            <Main>
                <Head/>
                <Form/>
            </Main>
        </StyledContactUs>
    );
};

export default ContactUs;
