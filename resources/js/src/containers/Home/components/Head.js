import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { purple } from '../../../styles/utilities/Colors';


const StyledHead = styled.div`
    padding : 4rem;
    background: white;
`;

const HeadContent = styled.div`
    padding: 12rem 1rem 12rem 1rem;
    h1{
        width : 50%;
        font-size: 4.5rem;
        font-weight: bold;
    }
    p{
        padding: 2rem 0 5rem 0;
        width : 40%;
        font-size: 2.8rem;
        line-height: 1
    }
`;

const StyledLink = styled(Link)`
    border-radius: 8px;
    padding: 0 3rem 0 3rem;
    background: ${purple};
    color: white;
    font-size: 2.5rem;
    :hover{
        text-decoration: none;
        color: white;
    }
`;

const Head = () => {
    return (
        <StyledHead>
            <HeadContent>
                <h1> Learn languages at ease on Blab </h1>
                <p> Let us take you through your journey of being 
                    a Blabee and a Blabbers    
                </p>
                <StyledLink to="/log-in"> Get Started </StyledLink>
            </HeadContent>
        </StyledHead>
    );
};

export default Head;
