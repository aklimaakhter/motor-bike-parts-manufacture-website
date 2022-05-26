import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Parts from './Parts';
import Summaries from './Summaries';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Parts></Parts>
            <Summaries></Summaries>
        </div>
    );
};

export default Home;