import React from 'react';
import Banner from './Banner';
import BSummary from './BSummary';
import Footer from './Footer';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BSummary></BSummary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;