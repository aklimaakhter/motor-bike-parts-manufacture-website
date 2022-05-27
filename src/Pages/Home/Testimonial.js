import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            reviews: '',
            location: 'California',
            img: people1
        },

        {
            _id: 2,
            name: 'Winson Harry',
            reviews: '',
            location: 'California',
            img: people2
        },

        {
            _id: 3,
            name: 'Winson Harry',
            reviews: '',
            location: 'California',
            img: people3
        },


    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-l text-secondary font-bold text-3xl">Review</h4>
                    
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;