import React from 'react'
import styled from 'styled-components'
import Scrollbar from 'react-custom-scrollbars'

import Notif from './components/Notif'


const StyledNotification  = styled.div`
    width: 75%;
    padding: 2rem;
    h1{
        padding-left: 2rem;
        font-size: 3rem;
    }
`;

const Input = styled.input`
    margin: 0;
    &:nth-child(1){
        width: 65%;
    }
    &:nth-child(2){
        width: 30%;
    }
`;

const InputContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
`;

const SstyledScrollbar = styled(Scrollbar)`
    margin-top: 2rem;
    padding: 1rem;
`;

/*--------------------------- Variables ---------------------------*/
const Nots = [
    {icon: require("../../../../pictures/notification/clock.png"), 
        title:"Your class with Mark John has started", detail:"Spanish class", time:"20 min"},
    {icon: require("../../../../pictures/notification/hand-shake.png"), 
        title:"You haven been matched with Mark John", detail:"Proceed to class", time:"20 min"},
    {icon: require("../../../../pictures/notification/reply.png"), 
        title:"Mark John replied  to your offer", detail:"Reply him now", time:"20 min"},
    {icon: require("../../../../pictures/notification/download.png"), 
        title:"Your video was downloaded successfully", detail:"Japaness class (Mark John", time:"20 min"},
    {icon: require("../../../../pictures/notification/no-stopping.png"), 
        title:"Your download was unsuccessful", detail:"Click to resume", time:"20 min"},
    {icon: require("../../../../pictures/notification/no-stopping.png"), 
        title:"Your download", detail:"Click to resume", time:"20 min"},
    {icon: require("../../../../pictures/notification/no-stopping.png"), 
        title:"Your downloadqsdf", detail:"Click to resume", time:"20 min"},
];

const Not = Nots.map((ntf)=>
    <Notif key={ntf.title} icon={ntf.icon} title={ntf.title} detail={ntf.detail} time={ntf.time} />
);

const Notification = () => {
    return (
        <StyledNotification>
            <InputContent>
                <Input type="text" placeholder="Type to search" />
                <Input type="text" placeholder="Sort" />
            </InputContent>
            <SstyledScrollbar style={ {width: '100%', height: '70rem'} }>
                {Not}
            </SstyledScrollbar>
        </StyledNotification>
    );
};

export default Notification;

