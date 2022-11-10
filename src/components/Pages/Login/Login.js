import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');
    const from = location.state?.from?.pathname || '/';

    // email password based login

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .then(error => console.error(error))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-success mx-20 py-20">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn' type="submit" value="login" />
                        </div>
                    </form>
                    <p className='text-center'>New to RateUs? <Link className='text-orange-400 font-bold ' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;