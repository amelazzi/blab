import React from 'react';
import styled from 'styled-components'
import { lightGray, pink } from '../../../../../styles/utilities/Colors';

const StyledNotif = styled.div`
    padding: 2rem 0 2rem 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${lightGray};
`;

const ImgContainer = styled.div`
    width: 8%
    img{
        width: 100%;
    }
`;

const NotifContainer = styled.div`
    margin-left: 6rem;
    h1{
        font-size: 2.4rem !important;
        padding: 0 !important;
    }
    h2{
        font-size: 2.4rem;
        color: ${pink};
        font-weight: 300;
    }
    p{
        margin-top: 1rem;
        font-size: 2.4rem;
        color: ${lightGray}
    }
`;

const Notif = ({title, detail, time}) => {
    return (
        <StyledNotif>
            <ImgContainer>
                <img src={require("../../../../../pictures/book.png")} />
            </ImgContainer>
            <NotifContainer>
                <h1> {title} </h1>
                <h2> {detail} </h2>
                <p> {time} ago </p>
            </NotifContainer>
        </StyledNotif>
    );
};

export default Notif;

