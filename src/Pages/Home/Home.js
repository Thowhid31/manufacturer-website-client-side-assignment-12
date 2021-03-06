import React from 'react';
import Banner from './Banner';
import BSummary from './BSummary';
import Footer from './Footer';
import OurSpecialty from './OurSpecialty';
import OurSuccess from './OurSuccess';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BSummary></BSummary>
            <OurSpecialty></OurSpecialty>
            <Reviews></Reviews>
            <OurSuccess></OurSuccess>
            <Footer></Footer>
        </div>
    );
};

export default Home;