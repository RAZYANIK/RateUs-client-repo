import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.jpg';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';



const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.error(error);
            })
    }


    const menuItems = <>
        <li className='font-semibold mx-10'> <Link to='/'>Home</Link></li>
        <li className='font-semibold mx-10'> <Link to='/blog'>Blog</Link></li>
        <li className='font-semibold '> <Link to='/services'>Services</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold mx-10'> <Link to='/myReviewsPage'>My reviews</Link></li>
                    <li className='font-semibold mx-10'> <Link to='/addService'>Add service</Link></li>
                    <li className='font-semibold '> <button onClick={handleSignOut} >Logout</button></li>
                </>
                :

                <li><button className="btn btn-outline btn-error"><Link to='/login'>Login</Link></button></li>

        }

    </>
    return (
        <div className="navbar h-10 mb-20 mt-10 pt-5 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost pb-20 text-2xl">
                    Rate Us<img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;