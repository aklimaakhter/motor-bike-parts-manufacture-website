import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';

const BookingModal = ({ booking, setBooking}) => {

    const {_id, name} = booking;
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.value;
        console.log(_id, name,)
        const service ={
            bookingId:_id,
            booking:name,
            client:user.email,
            clientName: user.displayName,
            phone: event.target.phone.value,
        }

        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.success){
                toast(`Product is set, ${name}`)
            }
            else{
                toast.error(`Already have and product on set, ${name}`)
            }
            setBooking(null); 
        })
        
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div   className="modal modal-bottom sm:modal-middle">
                <div   className="modal-box">
                    <label   htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3   className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="date" placeholder="Date" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="address" name="address" placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default BookingModal;