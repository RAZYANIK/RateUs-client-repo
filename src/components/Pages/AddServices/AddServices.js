import React from 'react';
import { useState } from 'react';
import useTitle from '../../../hooks/useTitle';

const AddServices = () => {
    useTitle('AddServices');
    const [user, setUser] = useState({});
    const handleAddUser = event => {
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully');
                    event.target.reset();
                }
            })
    }
    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...user }
        newService[field] = value;
        setUser(newService);
    }
    return (
        <div>
            <div>
                <h2 className='text-2xl font-bold text-success'>Please Add Your Service</h2>
                <form onSubmit={handleAddUser}>
                    <input onBlur={handleInputBlur} type="text" placeholder="Service Name" name='service_Name' className="mt-5 input input-bordered input-error w-full max-w-xs" /><br />
                    <input onBlur={handleInputBlur} type="text" placeholder="Price" name='price' className="mt-2 input input-bordered input-error w-full max-w-xs" /><br />
                    <input onBlur={handleInputBlur} type="email" placeholder="Email" name='email' className="mt-2 input input-bordered input-error w-full max-w-xs" /><br />
                    <input onBlur={handleInputBlur} type="text" placeholder="Image" name='service_img' className="mt-2 input input-bordered input-error w-full max-w-xs" /><br />
                    <input onBlur={handleInputBlur} type="text" placeholder="Rating" name='general_rating' className="mt-2 input input-bordered input-error w-full max-w-xs" /><br />
                    <input onBlur={handleInputBlur} type="text" placeholder="Description" name='description' className="mt-2 input input-bordered input-error w-full max-w-xs" />
                    <br />
                    <button type="submit" className='btn btn-success mt-5'>Add User</button>
                </form>
            </div>
        </div>
    );
};

export default AddServices;