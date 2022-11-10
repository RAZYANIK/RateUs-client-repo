import React from 'react';

const Review = ({ review }) => {
    const {_id, reviewer_name, reviewerText, ReviwerImg, ReviewerRating } = review;
    // console.log(service);

    return (
        // <div>
        //     {/* <h1>hello:{(service.length)}</h1> */}
        // </div>
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={ReviwerImg} alt="Shoes" /></figure>
                <div className="card-body">

                    <h2 className="card-title">{reviewer_name}</h2>
                    <p className='font-semibold'>Review: {reviewerText}</p>
                    <p className='text-error font-bold'>Rating: {ReviewerRating}</p>

                </div>
            </div>

        </div>
    );
};

export default Review;