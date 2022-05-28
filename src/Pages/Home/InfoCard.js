import React from 'react';

const InfoCard = ({img,cardTitle ,details, bgClass}) => {
    return (
        <div class={`card card-side bg-base-100  shadow-xl bg-primary ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Movie"/>

                </figure>
            <div   className="card-body text-white">
                <h2   className="card-title">{cardTitle}</h2>
                <p>{details}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;