import React from 'react';

const Part = ({ part, setBooking}) => {
    const {name, img,description,minimum_order_quantity,available_quantity,price}=part;
    return (
        <div   className="card lg:max-w-lg bg-base-100 shadow-xl my-12">
            <figure><img src={img} alt="Shoes" /></figure>
            <div   className="card-body text-center">
                <h2   className="text-xl font-bold text-secondary">{name}</h2>
                <p>{description}</p>
                <p>minimum_order_quantity:{minimum_order_quantity}</p>
                <p>available_quantity:{available_quantity}</p>
                <p>${price}</p>
                <div   className="card-actions justify-center">
                    <label   htmlFor="booking-modal" 
                        onClick={() => setBooking(part)}   className="btn btn-sm btn-primary text-white uppercase bg-gradient-to-r from-secondary to-primary">Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default Part;