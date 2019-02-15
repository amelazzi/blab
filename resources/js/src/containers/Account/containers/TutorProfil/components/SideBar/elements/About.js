import React from 'react'
import styled from 'styled-components'

import { dark } from '../../../../../../../styles/utilities/Colors'

const StyledAbout = styled.div`
    margin: 2rem 2.5rem;
    p{
        color: ${dark};
        font-size: 2rem;
        font-weight: 300;
        line-height: 1.2;
        padding: 0;
        margin: 0;
        margin-top: 2rem;
    }
`;


const About = () => {
    return(
        <StyledAbout>
            <h1> About </h1>
            <p> Learn More about me here  Learn More about me hereLearn More about me here 
                Learn More about me here Learn More about me here Learn More about me here 
            </p>
        </StyledAbout>
    );
};

export default About;