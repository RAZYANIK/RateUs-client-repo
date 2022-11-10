import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full h-96">
                <div id="item1" className="carousel-item w-full ">

                    <img alt='' src="https://radikalisierende-raeume.de/wp-content/uploads/2021/03/rr-header-home.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full ">
                    <img alt='' src="https://www.un.org/en/events/mandeladay/assets/img/featured-image-statements.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img alt='' src="http://cdn.shopify.com/s/files/1/0274/0553/products/eiger-monch-jungfrau-switzerland-no-2-812470_1200x1200.jpg?v=1659042440" className="w-full" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>

            </div>
        </div>
    );
};

export default Banner;