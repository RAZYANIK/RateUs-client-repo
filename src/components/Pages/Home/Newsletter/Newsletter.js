import React from 'react';

const Newsletter = () => {
    return (
        <div className='my-10'>
            <div className="hero min-h-screen p-20" style={{ backgroundImage: `url("https://static.independent.co.uk/2022/09/08/17/landscape-photo-879205.jpg?quality=75&width=990&auto=webp&crop=982:726,smart")` }}>
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Our Newsletter</h1>
                        <p className="mb-5">Dorset at its best: Landscape photographer shows off beauty of his home county</p>
                        <button className="btn btn-primary"><a href="https://www.independent.co.uk/arts-entertainment/photography/dorset-photo-landscape-coast-b2158215.html" target="_blank" rel="noreferrer">Read more</a> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;