import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReview from '../MyReview/MyReview';
import Review from './Review';

const ServiceDetails = () => {

    const { _id, service_Name, service_img, price, general_rating, description, reviews } = useLoaderData();
    const { user } = useContext(AuthContext);
    useTitle('ServiceDetails');


    return (
        <div className='pb-40'>
            <div className="card w-3/4 mx-auto bg-base-300 shadow-xl">
                <h1 className=' my-10 font-bold text-center'>Service Details</h1>
                <figure className="px-10 pt-5 ">
                    <img src={service_img} alt="Shoes" className="rounded-xl w-3/4" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-success">{service_Name}</h2>
                    <p className='font-semibold'>{description}</p>
                    <div className='grid'>
                        <h1 className='font-bold text-error'>Rating: {general_rating}</h1>
                        <h1 className='font-bold text-info'>Price: ${price}</h1>

                    </div>

                </div>
            </div>
            <div className="stats shadow  mx-80 px-20 ">
                <div className="stat mt-20">
                    <div className="stat-value">.  .  .    Customer Reviews . . .</div>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-20'>

                {
                    reviews.map((review) => (
                        <Review key={review._id} review={review} ></Review>
                    ))
                }

            </div>
            {
                user?.email ?
                    <>
                        <MyReview id={_id}></MyReview>
                    </>
                    : <div className="card w-full bg-black shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-white">Do you want to review this service?</h2>
                            <p className='text-error font-bold'>First, Please login to add a review.</p>
                            <div className="card-actions justify-end">
                                <Link to='/login'><button className="btn btn-success">Login</button></Link>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ServiceDetails;