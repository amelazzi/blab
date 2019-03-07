import React from 'react'
import styled from 'styled-components'

import {lightPurple, light} from '../../../../../../styles/utilities/Colors'

import Information from './elements/Information'
import SimpleCollapsible from './elements/Collapsible'

const StyledClassInfo = styled.div`
    width: 75%;
    background: ${lightPurple};
    padding: 3.5rem 2.5rem;
`;

const Divider = styled.div`
    width: 100%;
    border: 0.8px solid ${light};
    margin: 2rem 0rem;
`;

const Description = styled.div`
    h2{
        font-size: 2.3rem;
        font-weight: 500;
        margin-left: 1rem;
    }
    p{
        font-size: 2rem;
    }
`;


const ClassIinfo = () => {
    return(
        <StyledClassInfo>
            <Information/>
            <Divider/>
            <Description>
                <h2> Description </h2>
                <p> Lorem ipsum dolor sit amet, mei ut mediocrem reformidans, pro ei liber 
                    epicurei. At adipisci qualisque mel. Eu idque partiendo mei, homero 
                    praesent philosophia ex ius. Sea veri cetero id, verear indoctum ex duo.
                    At legimus vulputate conceptam cum, ea argumentum instructior eam. Cu ius 
                    paulo mundi fastidii. Simul tempor vix et, novum epicurei ullamcorper 
                    sea id. Clita nominati eam te, erant eligendi no duo, eu minimum 
                    instructior 
                </p>
            </Description>
            <Divider/>
            <SimpleCollapsible>
                
            </SimpleCollapsible>
        </StyledClassInfo>
    );
};
export default ClassIinfo;