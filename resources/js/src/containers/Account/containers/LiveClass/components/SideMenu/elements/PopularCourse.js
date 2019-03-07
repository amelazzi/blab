import React from 'react'
import styled from 'styled-components'


const StyledCard = styled.div`
    box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.15);
    margin: 1rem;
    margin-top: 2.5rem;
`;

const ImgContainer = styled.div`
    width: 25.65rem;
    height: 16.3rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Content = styled.div`
    padding: 1.5rem;
    h1{
        font-size: 2.5rem;
        padding: 0 !important;
    }
    p{
        font-size: 1.5rem;
        line-height: normal;
    }
`;

const PopularCourse = ({picture, title, classNbr}) => {
    return(
        <StyledCard>
            <ImgContainer>
                <img src={picture} />
            </ImgContainer>
            <Content>
                <h1> {title} </h1>
                <p> Total class : {classNbr} </p>
            </Content>
        </StyledCard>
    );
};
export default PopularCourse;