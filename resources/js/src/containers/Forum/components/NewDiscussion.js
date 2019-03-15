import React from 'react';
import styled from 'styled-components';
import { purple, gray, red, orange, dark, green, pink, yellow, lightGray, blue } from '../../../styles/utilities';

const StyledNewDiscussion = styled.div`
    background: white;
    padding: 8rem 3rem;
    button{
        border: none;
        background: ${purple};
        color: white;
        border-radius: 1.2rem;
        font-size: 2.7rem;
        padding-left: 2rem;
        padding-right: 2rem;
        margin: 0rem 3rem;
    }
`;

const Divider = styled.div`
    width: 100%;
    border-bottom: 1px solid ${gray};
    margin: 3rem 0rem;
`;

const Key = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: start;
    align-items: center;
    p{
        color: ${dark};
        font-size: 2.7rem;
        font-weight: 500;
        padding: 0 !important;
        margin: 0.65rem 3.6rem !important;
    }
`;

const RedRectangle = styled.div`
    width: 2rem;
    height: 2rem;
    background: ${red};
`;

const GreenRectangle = styled(RedRectangle)`
    background: ${green};
`;

const PurpleRectangle = styled(RedRectangle)`
    background: ${purple};
`;

const PinkRectangle = styled(RedRectangle)`
    background: ${pink};
`;

const YellowRectangle = styled(RedRectangle)`
    background: ${yellow};
`;

const GrayRectangle = styled(RedRectangle)`
    background: ${lightGray};
`;

const BlueRectangle = styled(RedRectangle)`
    background: ${blue};
`;

const OrangeRectangle = styled(RedRectangle)`
    background: ${orange};
`;

const NewDiscussion = () => {
    return(
        <StyledNewDiscussion>
            <button> Start New Discussion </button>
            <Divider/>
            <Key>
                <RedRectangle/>
                <p> FAQ’s </p>
            </Key>
            <Key>
                <GreenRectangle/>
                <p> Off Topic Zone </p>
            </Key>
            <Key>
                <PurpleRectangle/>
                <p> Live Class </p>
            </Key>
            <Key>
                <PinkRectangle/>
                <p> Payment </p>
            </Key>
            <Key>
                <YellowRectangle/>
                <p> Courses </p>
            </Key>
            <Key>
                <GrayRectangle/>
                <p> Lesson Plan </p>
            </Key>
            <Key>
                <BlueRectangle/>
                <p> Blabber </p>
            </Key>
            <Key>
                <OrangeRectangle/>
                <p> Blabees </p>
            </Key>
        </StyledNewDiscussion>
    );
};

export default NewDiscussion;