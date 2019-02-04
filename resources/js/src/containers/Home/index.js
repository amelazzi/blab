import React from 'react';
import Main from './components/Main';
import RightSection from '../../components/RightSection'

const Home = () => {
    return (
        <>
            <Main/>
            <RightSection picture={require("../../pictures/pic1.png")} 
                title="Over 30 languages course taken on this platform."
                text="Let us take you on a journey through the varieties of 
                languages thought on this platform by qualified tours.">
            </RightSection>
        </>
    );
};

export default Home;
