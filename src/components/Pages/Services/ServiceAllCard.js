import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceAllCard = ({ service }) => {
    const { _id, service_Name, service_img, price, description, general_rating } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <div className="foo">

                    <PhotoView src={service_img}>
                        <img src={service_img} alt="" />
                    </PhotoView>

                </div>
            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title font-bold">{service_Name}</h2>
                <p className='text-xl text-orange-500 font-semibold'>Price: ${price}</p>
                <p className='text-lg text-green-500 '>Rating: {general_rating}</p>
                <p className='text-m text-black-500 '><span className='font-bold'>Description:</span> {description.slice(0, 300)}</p>
            </div>
            <div>
                <Link to={`/services/${_id}`}>
                    <button className="btn btn-success p-3 m-5">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceAllCard;