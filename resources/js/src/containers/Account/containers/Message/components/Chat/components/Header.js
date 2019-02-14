import React from 'react'
import styled from 'styled-components'
import { lightGray } from '../../../../../../../styles/utilities/Colors';

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.7rem 1.5rem;
    border-bottom: 1px solid ${lightGray};
    h1{
        font-size: 2rem;
        margin-left: 1.17rem;
    }
`;

const TutorInfo = styled.div`
    width: 50%;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`;

const ImgContainer = styled.div`
    width: 3.9rem;
    height: 3.9rem;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const MakingCalls = styled.div`
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: start;
    button{
        border: none;
        background: none;
        width: 3.3rem;
        height: 3.3;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;


const Header = ({picProfile, name}) => {
    return(
        <StyledHeader>
            <TutorInfo>
                <ImgContainer>
                    <img src={picProfile}/>
                </ImgContainer>
                <h1> {name} </h1>
            </TutorInfo>
            <MakingCalls>
                <button>
                    <img src={require("../../../assets/phone-receiver.png")} />
                </button>
                <button>
                    <img src={require("../../../assets/facetime-button.png")} />
                </button>
            </MakingCalls>
        </StyledHeader>
    );
};

export default Header;