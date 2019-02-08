import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { purple } from '../../../styles/utilities/Colors';


const StyledHead = styled.div`
    flex: 1;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6rem 3rem 3rem 10rem;
`;

const StyledContent = styled.div`
    width: 50%;
    h1{
        font-size: 5rem;
        font-weight: bold;
    }
`;

const StyledSubmit = styled.div`
    display: flex;
    justify-content: space-between;
    width: 62%;
`;

const StyledImg = styled.div`
    width: 50%;
    img{
        width: 100%;
    }
`;

const StyledLink = styled(Link)`
    margin-top: 3rem;
    padding-top: 1.5rem;
    width: 16rem;
    height: 6rem;
    text-align: center;
    background: ${props => props.theme.main};
    color: white;
    text-decoration: none;
    border-radius: 32px;
    font-size: 2rem;
`;

const theme = {
    main: "#4D70F4"
}

const Head = () => {
    return (
        <StyledHead>
            <StyledContent >
                <h1> Student (Blabee) </h1>
                <StyledSubmit theme={theme}>
                    <StyledLink to="/" theme={{ main: "#4D70F4" }}> 
                        Log in 
                    </StyledLink>
                    <StyledLink to="/" theme={{ main: "#3D3D3D" }}> 
                        How it works 
                    </StyledLink>
                </StyledSubmit>
            </StyledContent>
            <StyledImg>
                <img src={require("../../../pictures/get-started-student.png")} />
            </StyledImg>
        </StyledHead>
    );
};

export default Head;
