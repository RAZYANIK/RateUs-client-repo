import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import useTitle from '../../../hooks/useTitle';

const SignUp = () => {

    const { createUser, signInWithgoogle } = useContext(AuthContext);
    useTitle('SignUp');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // email based sign up
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err))
    }
    // for using google account to sign in(google based sign up)

    const handleGoogleSignIn = () => {
        signInWithgoogle()
            .then(result => {
                const user = result.user;
                console.log('registered', user);
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero w-full my-20 ">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-info mx-20 py-20">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-warning' type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <div className="card-body">
                        <h2 className='font-bold text-center my-2'>Sign in With</h2>

                        <button onClick={handleGoogleSignIn} className="btn btn-error text-white"><FaGoogle className='text-black'></FaGoogle>+ Google</button>
                        <p className='text-center font-semibold my-2'>Already have an account? <Link className='text-green-900 font-bold ' to='/login'>Login</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;