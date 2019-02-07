import React from 'react';
import styled from 'styled-components';

import Main from './components/Main';
import Head from './components/Head';

const StyledContactUs = styled.div`
`;

const ContactUs = () => {
    return (
        <StyledContactUs>
            <Main>
                <Head/>
            </Main>
        </StyledContactUs>
    );
};

export default ContactUs;
