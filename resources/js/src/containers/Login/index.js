import React from 'react';

import styled from 'styled-components'
import { purple,gray, dark } from '../../styles/utilities';
import { Link } from 'react-router-dom';

const StyledLogin = styled.div`
    padding: 8rem;
    background: white;
    text-align: center;
    h1{
        padding: 2rem;
        font-size: 6rem;
        color: ${purple};
        font-weight: bold
    }
    h2{
        color: ${gray};
        font-size: 2.5rem;
    }
    form{
        width: 50%;
        margin-left: 25%;
        background: white;
        padding: 4.5rem;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
    }
    input[type="submit"]{
        border: none;
        padding: 1rem;
        background: ${purple};
        color: white;
        font-size: 3rem;
        font-weight: bold
    }
`;

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 20%;
    h3{
        color: ${dark};
        font-size: 2.3rem;
    }
`;

const StyledSignUp= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledH3 = styled.h3`
    color: ${purple} !important;
`;

const StyledLink = styled(Link)`
    color: ${purple};
    font-size: 2.3rem;
    margin-left: 4px;
`;

const Login = () => {
    return (
        <StyledLogin>
            <h1> Login </h1>
            <h2> Welcome back! login to access your account </h2>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Sign In" />
            </form>
            <StyledFooter>
                <StyledH3> forgot your password? </StyledH3>
                <StyledSignUp>
                    <h3> Don't have an account?</h3>
                    <StyledLink to="/sign-up"> Sign Up </StyledLink>
                </StyledSignUp>
            </StyledFooter>
        </StyledLogin>
    );
};

export default Login;
