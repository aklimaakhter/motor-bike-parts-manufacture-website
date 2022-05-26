import React from 'react';

const Part = ({part}) => {
    const {name, img,description,minimum_order_quantity,available_quantity,price}=part;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>minimum_order_quantity:{minimum_order_quantity}</p>
                <p>available_quantity:{available_quantity}</p>
                <p>${price}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;