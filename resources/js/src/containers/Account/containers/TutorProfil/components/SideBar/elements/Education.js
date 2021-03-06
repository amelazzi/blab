import React from 'react'
import styled from 'styled-components'


const StyledEducation = styled.div`
    margin: 2rem 2.5rem;
    h2{
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    p{
        margin: 0 !important;
        line-height: 1;
    }
`;

const Education = ({field, university, year}) => {
    return(
        <StyledEducation>
            <h1> Education </h1>
            <h2> {field} </h2>
            <p> {university} </p>
            <p> {year} </p>
        </StyledEducation>
    );
};

export default Education;