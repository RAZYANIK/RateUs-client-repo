import React from 'react';
import Service from '../Services/Service';
import Footer from '../Shared/Footer/Footer';
import About from './About/About';
import Banner from './Banner/Banner';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
            <Newsletter></Newsletter>
            <Footer></Footer>

        </div>
    );
};

export default Home;