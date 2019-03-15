import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { purple, gray } from '../../../styles/utilities/Colors';

const background = require("../../../pictures/contact.png")

const StyledHead = styled.div`
    padding : 6rem 6rem 0 6rem;
    background-image: url(${background});
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: 85%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
`;

const HeadContent = styled.div`
    padding: 15rem 8rem 12rem 8rem;
    h1{
        width : 50%;
        font-size: 6rem;
        font-weight: bold;
        color: ${purple}
    }
    p{
        padding: 3rem 0 5rem 0;
        color: ${gray};
        font-size: 2.5rem;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
    }
`;


const Head = () => {
    return (
        <StyledHead>
            <HeadContent>
                <h1> Contact Us </h1>
                <p> For any questions regarding our 
                    <br></br>services, reach us below  
                </p>
            </HeadContent>
        </StyledHead>
    );
};

export default Head;
