import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
    const { _id, service_img
        , price, service_Name, description, general_rating
    } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={service_img
            } alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{service_Name}</h2>
                <p className='text-xl text-orange-500 font-semibold'>Price: ${price}</p>
                <p className='text-m text-green-500 '>Rating: {general_rating}</p>
                <p className='text-m text-black-500 '><span className='font-bold'>Description:</span> {description.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                </div>

                <div>
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-success">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;