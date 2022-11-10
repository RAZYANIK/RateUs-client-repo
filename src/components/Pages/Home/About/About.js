import React from 'react';

const About = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img alt='' src="https://images.pexels.com/photos/14202978/pexels-photo-14202978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-4/5 h-full rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold text-dark-500">About Us</h1>
                    <p className="py-5">To us photography is about people being real and then letting us paint a picture of that moment to remember it forever. This is the story that matters most: real people, real stories, real moments.
                        <br />
                        We are incredibly blessed to have a team of photographers who work with us on any given weekend. Please take a few minutes to get to know us.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;