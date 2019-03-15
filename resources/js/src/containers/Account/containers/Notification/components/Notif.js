import React from 'react';
import styled from 'styled-components'
import { lightGray, pink, light } from '../../../../../styles/utilities/Colors';

const StyledNotif = styled.div`
    padding: 2rem 0 2rem 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${light};
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

const Notif = ({icon, title, detail, time}) => {
    return (
        <StyledNotif>
            <ImgContainer>
                <img src={icon} />
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

