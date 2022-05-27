import React from 'react';

const Summary = ({summary}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={summary.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{summary.name}</h2>
                <p>{summary.description}</p>
            </div>
        </div>
    );
};

export default Summary;
