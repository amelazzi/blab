import React from 'react'
import styled from 'styled-components'
import { dark } from '../../../styles/utilities/Colors';


const background = require("../../../pictures/home/footer.png");

const StyledFooter = styled.div`
    height: 53rem;
    padding: 6rem 23rem;
    margin-top: 0.5rem;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;

    text-align: center;
    color: ${dark};
    h1{
        margin: 3rem;
        font-size: 4rem;
    }
    p{
        font-size: 1.6rem;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <h1> Ready to step into the world of knowledge? </h1>
            <p> Take your first step into a world of interactive, fun and comprehnsive knowledge, signup today and get started. and visit our forum to check out whats trending on new topics discussed everyday </p>
        </StyledFooter>
    );
};

export default Footer;
