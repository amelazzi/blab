import React from 'react';
import styled from 'styled-components';
import { darkGray, light, pink, purple, gray } from '../../../styles/utilities/Colors';

const StyledMain = styled.main`
    flex: 1;
`;

const Main = () => {
    return (
        <StyledMain>
            <h2>
                Sit enim cillum ad duis est veniam elit incididunt aliqua
                eiusmod laborum anim eu.
            </h2>
            <p>
                Occaecat amet duis minim cupidatat veniam aliqua laboris fugiat
                eu aliquip. Consequat voluptate velit adipisicing aliqua minim
                cupidatat incididunt cupidatat. Magna et veniam consectetur
                officia adipisicing culpa. Est veniam culpa voluptate incididunt
                dolor quis magna proident amet cupidatat sunt. Sit id voluptate
                sit esse qui reprehenderit ea commodo.
            </p>
            <p>
                Sunt in voluptate exercitation nulla est incididunt labore
                consectetur et minim qui qui. Occaecat occaecat exercitation
                culpa reprehenderit voluptate do amet duis consectetur Lorem.
                Anim in officia ipsum exercitation consectetur aliqua nulla
                reprehenderit reprehenderit nisi.
            </p>
        </StyledMain>
    );
};

export default Main;
