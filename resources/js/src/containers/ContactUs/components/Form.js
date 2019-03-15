import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { purple, gray, dark, lightGray } from '../../../styles/utilities/Colors';

const Forms = styled.div`
    padding: 8rem 0 16rem 12rem;   
    margin-top: 1rem; 
    display: flex;
    flex-direction: column;
    background: white;
    textarea{
        width: 71rem;
        height: 16rem;
        padding: 0.5rem 0 0.5rem 0.5rem !important;
        color: ${dark} !important;
    }

    textarea::-webkit-input-placeholder {
        color: ${dark} !important;
        font-weight: 300 !important;
        font-size: 1.8rem !important;
    }

    input[type="submit"]{
        border: none;
        width: 250px;
        padding: 1rem 4rem 1rem 4rem;
        background: ${purple};
        color: white;
        font-size: 1.8rem;
        font-weight: normal;
        margin-left: 0 !important;
    }
`;


const StyledForm = styled.div`
    width: 70%;    
    display: flex;
    justify-content: space-between;
`;

const FormContent = styled.div`
    width: 50%;
`;

const Content = styled.div`
    margin-bottom: 6rem;
    h1{
        color: ${dark};
    }
    p{
        font-size: 2.2rem;
        padding: 0;
        color: ${lightGray};
        font-weight: 350;
    }
`;

const StyledInputs = styled.div`
    width: 50%; 
    display: flex;
    flex-direction: row;
    input{
        margin: 0 0 8rem 1rem !important;
        border: 1px solid ${lightGray} !important;
        padding: 0.5rem 0 0.5rem 0.5rem !important;
    }
    ::placeholder, input[type="text"]{
        color: ${dark} !important;
        font-weight: 300 !important;
    }
`;



const From = () => {
    return (
        <Forms>
            <StyledForm>
                <FormContent>
                    <Content>
                        <h1> Chicago, USA </h1>
                        <p> 345 Micheal Jackson Road </p>
                    </Content>
                    <Content>
                        <h1> +1 (626) 807-1686 </h1>
                        <p> Mon to Fri 9am - 5pm </p>
                    </Content>
                    <Content>
                        <h1> Support@blab.com </h1>
                        <p> Send us feedback anytime </p>
                    </Content>
                </FormContent>
                <StyledInputs>
                    <form>
                        <input type="text" placeholder="Enter your name" />
                        <input type="text" placeholder="Enter phone number" />
                        <input type="text" placeholder="Enter email address" />
                    </form>
                </StyledInputs>
            </StyledForm>
            <textarea placeholder="Enter Message"></textarea>
            <input type="submit" value="Send Message"/>
        </Forms>
    );
};

export default From;
