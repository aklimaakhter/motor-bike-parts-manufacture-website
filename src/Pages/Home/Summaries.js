import React from 'react';
import Summary from './Summary';

const Summaries = () => {
    const summaries = [
        {
            _id: 1,
            name: '100+',
            description: 'Customers',
            img: 'https://i.ibb.co/0YfDZhM/young-man-1.png'
        },
        {
            _id: 2,
            name: '33K',
            description: 'Reviews',
            img: 'https://i.ibb.co/gJk67KH/review-1.png'
        },
        {
            _id: 3,
            name: '120m+',
            description: 'Annual revenue',
            img: 'https://i.ibb.co/hc1rjQh/dollar-1.png'
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-2xl font-bold uppercase'>Business Summary</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    summaries.map(summary => <Summary
                        key={summary._id}
                        summary={summary}
                    ></Summary>)
                }
            </div>
        </div>
    );
};

export default Summaries;