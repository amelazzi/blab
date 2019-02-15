import React from 'react'
import styled from 'styled-components'

import { gray } from '../../../../../../../styles/utilities/Colors'

const LanguageInfo = styled.div`
    margin: 0 2.5rem;
    h2{
        font-size: 2.4rem;
        margin-top: 2rem;
        font-weight: 500;
        padding: 0;
        margin: 1rem;
    }
    p{
        color: ${gray};
        font-size: 2.4rem;
        font-weight: 400;
        padding: 0;
        margin: 0;
    }
`;

const LanguageContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;  
`;

const Languages = () => {
    return(
        <LanguageInfo>
            <LanguageContent>
                <p> Country : </p>
                <h2> France </h2>
            </LanguageContent>
            <LanguageContent>
                <p> Native Language : </p>
                <h2> Spanish </h2>
            </LanguageContent>
        </LanguageInfo>
    );
};

export default Languages;