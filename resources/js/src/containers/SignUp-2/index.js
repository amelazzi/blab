import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { purple, lightGray } from '../../styles/utilities';

const StyledStep = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 6rem 2rem 6rem 2rem;
    text-align: center;
    h2{
        color: ${lightGray};
        font-size: 3rem;
    }
    h1{
        font-size: 3.6rem;
    }
    h3{
        font-size: 2.3rem;
    }
`;

const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3rem 0 0 0;
    align-items: center;
`;

const StyledImg = styled.div`
    width: 50%;
    padding: 2rem;
    img{
        width: 100%;
    }
`;

const StyledForm = styled.div`
    width: 50%;
    form{
        margin-top: 3rem;
        display: flex;
        flex-direction: column
    }
    input[type="submit"]{
        border: none;
        width: 60%;
        background: ${purple};
        color: white;
        font-size: 3rem;
    }
`;

const ParalelInput = styled.div`
    display: flex;
    justify-content: center;
    input{
        width: 50%;
    }
`;

const StyledSignIn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledLink = styled(Link)`
    color: ${purple};
    font-size: 2.3rem;
    margin-left: 4px;
    margin-top: -4px;
`;

const SignUp2 = () => {
    return (
        <StyledStep>
            <h2> Step 2 of 3 </h2>
            <StyledContent>
                <StyledImg>
                    <img src={require("../../pictures/step2.png")}/>
                </StyledImg>
                <StyledForm>
                    <h1> Setup your account now </h1>
                    <form>
                        <ParalelInput>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </ParalelInput>
                        <input type="text" placeholder="Date of birth" />
                        <ParalelInput>
                            <input type="text" placeholder="Country" />
                            <input type="text" placeholder="State" />
                        </ParalelInput>
                        <input type="text" placeholder="Native Language" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                    </form>
                    <StyledSignIn>
                        <h3> Already have an account?</h3>
                        <StyledLink to="/log-in"> Sign In </StyledLink>
                    </StyledSignIn>
                    <Link to="/congrats">
                        <input type="submit" value="Register" />
                    </Link>
                </StyledForm>
            </StyledContent>
        </StyledStep>
    );
};

export default SignUp2;