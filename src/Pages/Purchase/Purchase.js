import React from 'react';
import { useEffect, useState } from 'react';
import Part from '../Home/Part';

const Purchase = () => {
    // const [parts, setParts] = useState([]);
    const parts = [
        { _id: 1, name: "Lighting", img: "https://i.ibb.co/Gc5pzFd/dwidiyo-hanung-Gy-Rvt-Ayy-Vss-unsplash-1.png", description: "it is comfort", minimum_order_quantity: 100, available_quantity: 1000, price: "50" },
        { _id: 2, name: "Lighting", img: "https://i.ibb.co/Gc5pzFd/dwidiyo-hanung-Gy-Rvt-Ayy-Vss-unsplash-1.png", description: "it is comfort", minimum_order_quantity: 100, available_quantity: 1000, price: "50" },
        { _id: 3, name: "Lighting", img: "https://i.ibb.co/Gc5pzFd/dwidiyo-hanung-Gy-Rvt-Ayy-Vss-unsplash-1.png", description: "it is comfort", minimum_order_quantity: 100, available_quantity: 1000, price: "50" },
        { _id: 4, name: "Lighting", img: "https://i.ibb.co/Gc5pzFd/dwidiyo-hanung-Gy-Rvt-Ayy-Vss-unsplash-1.png", description: "it is comfort", minimum_order_quantity: 100, available_quantity: 1000, price: "50" },
        { _id: 5, name: "Lighting", img: "https://i.ibb.co/Gc5pzFd/dwidiyo-hanung-Gy-Rvt-Ayy-Vss-unsplash-1.png", description: "it is comfort", minimum_order_quantity: 100, available_quantity: 1000, price: "50" },
        { _id: 6, name: "Lighting", img: "https://i.ibb.co/Gc5pzFd/dwidiyo-hanung-Gy-Rvt-Ayy-Vss-unsplash-1.png", description: "it is comfort", minimum_order_quantity: 100, available_quantity: 1000, price: "50" },
        { _id: 7, name: "Lighting", img: "https://i.ibb.co/Gc5pzFd/dwidiyo-hanung-Gy-Rvt-Ayy-Vss-unsplash-1.png", description: "it is comfort", minimum_order_quantity: 100, available_quantity: 1000, price: "50" },
        { _id: 8, name: "Lighting", img: "https://i.ibb.co/Gc5pzFd/dwidiyo-hanung-Gy-Rvt-Ayy-Vss-unsplash-1.png", description: "it is comfort", minimum_order_quantity: 100, available_quantity: 1000, price: "50" },

    ]
    
    return (
        <div>
            <h2 className='text-4xl text-secondary font-bold text-center my-12'>Our Manufacturing Parts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Purchase;