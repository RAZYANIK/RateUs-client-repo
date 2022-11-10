import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ServiceAllCard from './ServiceAllCard';
;

const ServiceAll = () => {
    useTitle('Services');
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Reviewed Services</p>

                <p>“Thank you everyone for your for feedback and Wedding Photography Reviews – it means the world to me that you love the images and that you enjoy having me there on you very special day.” </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 pb-10'>
                {
                    services.map(service => <ServiceAllCard
                        key={service._id}
                        service={service}
                    ></ServiceAllCard>)
                }
            </div>
        </div>
    );
};

export default ServiceAll;