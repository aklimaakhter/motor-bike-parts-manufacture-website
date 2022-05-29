import React from 'react';
import quote from '../../assets/icons/quote.svg';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Hemar sen',
            reviews: "It's quality is very good.",
            location: 'France',
            img:"https://i.ibb.co/qY5jrCX/andrey-zvyagintsev-Pdc-NOb4i-YFs-unsplash.jpg"
        },

        {
            _id: 2,
            name: 'Winson Harry',
            reviews: ' Long Warranty Lumenis Hair Removal Machine Customer  Laser 60W Diode Beauty Equipment',
            location: 'California',
            img: "https://i.ibb.co/TtX8NbP/nicolas-horn-MTZTGv-Ds-HFY-unsplash.jpg"
        },

        {
            _id: 3,
            name: 'Sinha tanima',
            reviews: 'Vibration Absorptive Material PU Foam Poron Air Cushion Shock Absorption Insoles',
            location: 'Italy',
            img: "https://i.ibb.co/61p22Yb/almos-bechtold-3402kvt-Hh-Oo-unsplash.jpg"
        },


    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4     className="text-l text-secondary font-bold text-3xl">Review</h4>
                    
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