import React, { useEffect, useState } from 'react';

const MyReviewPageRow = ({ UseReview, handleDelete, handleStatusUpdate }) => {

    const { _id, reviewer_name, Service_rating, email, reviewer_img, review } = UseReview;

    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://assignment-11-server-tawny.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [_id])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img className='' src={reviewer_img} alt="" />

                    </div>
                </div>
            </td>
            <td >
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{reviewer_name}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                {Service_rating}
                <br />
                <span className="badge badge-ghost badge-sm"></span>
            </td>
            <td>{email}</td>
            <td>{review}</td>
            <th>
                {/*  */}
                <div>
                    {/* The button to open modal */}
                    <label onClick={() => handleStatusUpdate(_id)} htmlFor="my-modal" className="btn btn-error">Edit</label>
                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Your Review</h3>
                            <p className="py-4">{review}</p>
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn btn-success">Okay</label>
                            </div>
                        </div>
                    </div>
                </div>
            </th>
        </tr>
    );
};

export default MyReviewPageRow;