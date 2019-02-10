import React from 'react'
import styled from 'styled-components'
import {lightGray} from '../../../../styles/utilities/Colors'

import SideBar from './components/SideBar'
import Tabs from './components/Tabs'

const StyledProfil = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
`;

const ProfilContent = styled.div`
    padding: 11rem 6rem 9rem 6rem;
    width: 75%;
`;

const StyledH1 =styled.h1`
    font-size: 2.8rem;
    font-weight: bold;
`;

const StyledH2 =styled.h2`
    font-size: 2.5rem;
    margin-top: -1rem;
    font-weight: 500;
`;

const RatesContent = styled.div`
    margin-top: 5.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const StyledH3 = styled.h3`
    font-size: 2.1rem;
    font-weight: 600;
    margin:0;
    padding:0;
`;

const StarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1.8rem;
    img{
        width: 2rem;
        height: 2rem;
        margin: 0.125rem;
    }
`;

const StyledButton = styled.button`
    border: 1px solid ${lightGray};
    border-radius: 4px;
    background: white;
    margin-top: 4.6rem;
    height: 4.2;
    padding-right: 3rem;
    padding-left: 3rem;
`;

const Profil = () =>{
    return(
        <StyledProfil>
            <SideBar></SideBar>
            <ProfilContent>
                <StyledH1> Natasha Jane </StyledH1>
                <StyledH2> Blabee </StyledH2>
                <RatesContent>
                    <StyledH3> 4.0 </StyledH3>
                    <StarContainer>
                        <img src={require("../../../../pictures/ratedstar.png")} />
                        <img src={require("../../../../pictures/ratedstar.png")} />
                        <img src={require("../../../../pictures/ratedstar.png")} />
                        <img src={require("../../../../pictures/star-2.png")} /> 
                    </StarContainer>
                </RatesContent>
                <StyledButton> Edit Profile </StyledButton>
                <Tabs/>
            </ProfilContent>
        </StyledProfil>
    );

};

export default Profil;