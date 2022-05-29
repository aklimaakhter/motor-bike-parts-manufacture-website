import React from 'react';
import motorbike from '../../assets/images/motorbike.png'

const Banner = () => {
    return (
        <div   className="hero min-h-screen">
            <div   className="hero-content flex-col lg:flex-row-reverse">
                <img src={motorbike}  alt=''/>
                <div>
                    <h1   className="text-5xl font-bold">Your One-stop Motor Bike Parts</h1>
                    <p className="py-6">With our comprehensive range of products and efficient supply chain management, CBF is your best choice for quality and affordable custom motorcycle parts for your market.

</p>
                    <button   className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;