import React from 'react'
import styled from 'styled-components'
import { gray } from '../../../../../../../styles/utilities/Colors'

const StyledItem = styled.div`
    p{
        color: ${gray};
        font-size: 2.2rem;
        padding-left: 1rem;
    }
`;


const CollapsibleItem = ({args}) => {
    return(
        <StyledItem>
            {args}
        </StyledItem>
    );
};
export default CollapsibleItem;