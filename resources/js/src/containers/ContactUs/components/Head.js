import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { purple, gray } from '../../../styles/utilities/Colors';


const StyledHead = styled.div`
    padding : 4rem;
    background: white;
`;

const HeadContent = styled.div`
    padding: 12rem 9rem 12rem 9rem;
    h1{
        width : 50%;
        font-size: 4.5rem;
        font-weight: bold;
        color: ${purple}
    }
    p{
        padding: 2rem 0 5rem 0;
        color: ${gray};
        font-size: 2rem;
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
