import React from 'react';
import ccBanner from '../../Assets/images/CC.png'
import bgOfBanner from '../../Assets/images/bg-2_720x410.jpg'

const Banner = () => {
    return (
        <div style={{
            background: `url(${bgOfBanner})`,
            backgroundSize: 'cover'
        }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={ccBanner} className='flex-1 shrink-0' alt="img-alt" />
                <div className='px-12 flex-1'>
                    <p className='text-green-500'>WELCOME TO</p>
                    <h1 class="text-5xl font-bold">Computer Mechanism</h1>
                    <p class="py-6">This is the best address to earn your best computer parts product to resolves your valuable laptop's problems.</p>
                    <button class="btn btn-primary uppercase bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;