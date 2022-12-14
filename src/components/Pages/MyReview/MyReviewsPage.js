import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewPageRow from './MyReviewPageRow';

const MyReviewsPage = () => {

    useTitle('MyReview');

    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);


    useEffect(() => {
        fetch(`https://assignment-11-server-tawny.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    // for delete data from the database

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete this review?');
        if (proceed) {
            fetch(`https://assignment-11-server-tawny.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete is Successful')
                        const remaining = review.filter(odr => odr._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }
    // for update the data to the database
    const handleStatusUpdate = id => {
        fetch(`https://assignment-11-server-tawny.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = review.filter(odr => odr._id !== id);
                    const approving = review.find(odr => odr._id === id);
                    approving.status = 'Approved'

                    const newOrders = [approving, ...remaining];
                    setReview(newOrders);
                }
            })
    }


    return (
        <div>
            <h2 className="text-5xl">You have {review.length} Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr >
                            <th>
                            </th>
                            <th className='text-xl text-info'>Image</th>
                            <th className='text-xl text-info'>Name</th>
                            <th className='text-xl text-info'>Rating</th>
                            <th className='text-xl text-info'>Email</th>
                            <th className='text-xl text-info'>Reviews</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(UseReview => <MyReviewPageRow
                                key={UseReview._id}
                                UseReview={UseReview}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></MyReviewPageRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviewsPage;