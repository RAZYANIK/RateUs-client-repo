import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



const MyReview = (props) => {
   
    const data=props.id;
    // console.log(data);
    const{user}=useContext(AuthContext);
    
    const handlePlaceOrder = event => {
    event.preventDefault();
    const form = event.target;
        const name = form.reviewer_name.value;
        const email = user?.email || 'unregistered';
        const rating = form.rating.value;
        const img = form.img.value;
        const review = form.review.value;

        const userReview={
            reviewer_id:data,
            reviewer_name :name,
            Service_rating:rating,
            email,
            reviewer_img:img,
            review:review,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    alert('Review Submitted');
                    form.reset();
                }
            })
            .catch(error => console.error(error))

    }
    return (
        <div>
            <div>
            <form onSubmit={handlePlaceOrder} >
                <h2 className='text-4xl mb-10 text-center font-bold'>Give Your valuable review about the service </h2>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='reviewer_name' type="text" placeholder="your name" className="input input-bordered w-full" required />
                    <input name='rating' type="text" placeholder="Rating for the overall service out of 5" className="input input-bordered w-full " required />
                    <input name='img' type="text" placeholder="your image url" className="input input-bordered w-full"/>
                    <input name='email' type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='review' className="textarea textarea-bordered h-24 w-full mt-6" placeholder="your review"></textarea>
                <input className='btn btn-error' type="submit" name="submit" value='Submit your review' id="" />
            </form>
        </div>
        </div>
    );
};

export default MyReview;