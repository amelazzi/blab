import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { purple } from '../../../../../styles/utilities/Colors';


const StyledProceed = styled.div`
    width: 75%;
    padding: 10.8rem 9.5rem;
    text-align: center;
    h1{
        font-size: 3.1rem;
        font-weight: 500;
        &:nth-child(2){
            margin-top: 14rem;
        }
    }
    button{
        color: white;
        font-size: 3rem;
        margin-top: 15rem;
        border: none;
        border-radius: 5px;
        padding: 1rem 8rem;
        background: ${purple};
        cursor: pointer;
    }
`;

const Proceed = () => {
    return(
        <StyledProceed>
            <h1> Your request has been submited successfully, 
                our system is looking for a suitable tutor for you.
                <br/>We will send you a notification as soon as we find you 
                a match.
            </h1>
            <h1> This might take several minutes... </h1>
            <Link to="/account"> 
                <button> Go to Dashboard </button>
            </Link>
        </StyledProceed>
    );
};

export default Proceed;