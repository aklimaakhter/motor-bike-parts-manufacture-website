import React, { useEffect, useState } from 'react';
import Part from '../Home/Part';
import BookingModal from '../Purchase/BookingModal';


const Parts = () => {
    const [parts, setParts] = useState([]);

    const [booking, setBooking] = useState(null);

    useEffect( () =>{
        fetch('parts.json')
        .then(res => res.json())
        .then(data => setParts(data));
    }, [])


return (
    <div>
        <h2 className='text-4xl text-secondary font-bold text-center my-12'>Our Manufacturing Parts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                parts.map(part => <Part
                    key={part._id}
                    part={part}
                    setBooking={setBooking}
                ></Part>)
            }
        </div>
        {booking && <BookingModal 
        booking={booking}
        setBooking={setBooking}
        ></BookingModal>}
    </div>
);
};
export default Parts;