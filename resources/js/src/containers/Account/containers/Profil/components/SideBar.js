import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {lightGray, purple} from '../../../../../styles/utilities/Colors'

const StyledSidBar = styled.div`
    width: 13em;
    padding:  4.9rem 6rem 18.8rem 6rem;
    -webkit-box-shadow: 0 0 10px 0px ${lightGray};
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
    color: ${purple};
    font-size: 2rem;
`;

const ImgContainer = styled.div`
    width: 100%;
    margin-top: 4.6rem;
    margin-bottom: 1.3rem;
    img{
        width: 100%;
    }
`;

const ProfilContent = styled.div`
    h1,h2{
        font-size: 2.4rem;
    }
    h1{
        margin-top: 1.4rem;
        margin-bottom: 2rem;
    }
    h2{
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