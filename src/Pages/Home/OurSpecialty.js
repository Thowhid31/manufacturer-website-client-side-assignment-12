import React from 'react';
import specialty from '../../Assets/images/why-us.jpg'

const OurSpecialty = () => {
    return (
        <div className='mt-24 flex'>
            <div class="hero px-12 min-h-screen bg-base-200 p-5">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={specialty} class="max-w-sm rounded-lg shadow-2xl flex-1" alt=''/>
                    <div className='flex-1 p-5 lg:p-24'>
                        <h1 class="text-5xl font-bold">Satisfy With Computer Mechanism</h1>
                        <p class="py-6">We can ensure you that, you can find hope and best service from us. Our term and condition is very customer friendly. If you are not satisfy our with services, then just call us. Our Authority learn how about solve your problems</p>
                        <button class="btn btn-primary uppercase bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSpecialty;