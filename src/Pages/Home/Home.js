import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Info from './Info';
import Part from './Part';
import Summaries from './Summaries';


const Home = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch("parts.json")
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <div>
                <h2 className='text-4xl text-secondary font-bold text-center my-12'>Our Manufacturing Parts</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        parts.slice(0, 3).map(part => <Part
                            key={part._id}
                            part={part}
                        ></Part>)
                    }
                </div>
            </div>
            
            <Summaries></Summaries>
        </div>
    );
};

export default Home;