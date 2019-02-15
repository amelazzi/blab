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
        color: ${gray} !important;
        font-size: 2.4rem !important;
        font-weight: 400 !important;
        padding: 0 !important;
        margin: 0 !important;
    }
`;

const LanguageContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;  
`;

const Languages = ({country, nativeLaguage}) => {
    return(
        <LanguageInfo>
            <LanguageContent>
                <p> Country : </p>
                <h2> {country} </h2>
            </LanguageContent>
            <LanguageContent>
                <p> Native Language : </p>
                <h2> {nativeLaguage} </h2>
            </LanguageContent>
        </LanguageInfo>
    );
};

export default Languages;