import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Scrollbar from 'react-custom-scrollbars'

import { purple, gray, lightGray, dark } from '../../../../../../../styles/utilities/Colors';


const StyledClassDetail = styled.div`
    flex-direction: column;
    background: white;
    width: 55%;
    margin-top:1rem;
    padding: 3rem;
    p{
        margin-top: 4rem;
        margin-bottom: 0.8rem;
        margin-left: 1rem;
        font-size: 2.3rem;
        font-weight: 500;
    }
    li{
        p{
            margin: 0;
            margin-left: 1rem;
        }
    }   
`;

const Tabs = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${lightGray};
    border-radius: 1.7rem;
    padding: 0.8rem 6rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 2.3rem;
    line-height: 1.94rem;
    font-weight: 300;
    color: ${dark};
    :hover{
        text-decoration: none;
        color: ${purple};
    }
`;


const ClassDetail = ({resume, args }) => {
    return(
        <StyledClassDetail>
            <Tabs>
                <StyledLink to="/"> Class Details </StyledLink>
                <StyledLink to="/"> Live Chat </StyledLink>
            </Tabs>
            <Scrollbar style={ {width: '100%', height: '30rem'} }>
                <p> {resume} </p>
                {args}
            </Scrollbar>
        </StyledClassDetail>
    );
};
export default ClassDetail;