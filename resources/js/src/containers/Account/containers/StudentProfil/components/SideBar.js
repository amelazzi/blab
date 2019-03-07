import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {lightGray, purple, light} from '../../../../../styles/utilities/Colors'

const StyledSidBar = styled.div`
    padding:  4.9rem 5rem 18.8rem 5rem;
    border-right: 1px solid ${light};
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
    color: ${purple};
    font-size: 2rem;
    :hover{
        text-decoration: none;
        color: ${purple};
        cursor: pointer;
    }
`;

const ImgContainer = styled.div`
    width: 30rem;
    height: 30rem;
    margin-top: 4rem;
    margin-bottom: 1.3rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover
    }
`;

const ProfilContent = styled.div`
    h1,h2{
        font-size: 2.4rem;
    }
    h1{
        margin-top: 1.4rem;
        border-bottom: 1px solid ${light};
    }
    h2{
        margin-top: 2rem;
        font-weight: 500;
    }
    p{
        margin-top: -1rem;
        font-size: 2.4rem;
        font-weight: 400;
    }
`;

const SideBar = () => {
    return(
        <StyledSidBar>
            <StyledLink to='/account'> Go to Dashboard </StyledLink>
            <ImgContainer>
                <img src={require("../../../../../pictures/profile.png")} />
            </ImgContainer>
            <ProfilContent>
                <h1> Profile information </h1>
                <>
                    <h2> Country: </h2>
                    <p> France </p>
                </>
                <>
                    <h2> Gender: </h2>
                    <p> Female </p>
                </>
                <>
                    <h2> Native Language: </h2>
                    <p> Spanish </p>
                </>
                <h1> Recent Class </h1>
            </ProfilContent>
        </StyledSidBar>
    );
};

export default SideBar;