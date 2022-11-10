import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewPageRow from './MyReviewPageRow';

const MyReviewsPage = () => {

    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
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
    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
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