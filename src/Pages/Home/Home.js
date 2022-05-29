import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Part from './Part';
import Review from './Review';
import Summaries from './Summaries';
import Testimonial from './Testimonial';


const Home = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch("https://glacial-brook-45972.herokuapp.com/part")
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Testimonial></Testimonial>
            
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
            <div className='text-center'>
                <Link to='/purchase'
                    className='btn btn-primary m-5'>
                    Purchase
                </Link>
            </div>
            <Summaries></Summaries>
            <Contact></Contact>
        </div>
    );
};

export default Home;