import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-tawny.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className="text-2xl font-bold text-orange-500 text-center">Our Services</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 pb-10'>
                {
                    services.slice(0, 3).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>
            <div className="card-actions grid justify-center">
                <Link to='/services'>
                    <button className="btn btn-error">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;