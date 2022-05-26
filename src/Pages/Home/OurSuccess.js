import React from 'react';
import award from '../../Assets/images/award.jpg'

const OurSuccess = () => {
    return (
        <div className='px-12 h-screen' style={{
            background: `url(${award})`,
            backgroundSize: 'cover'
        }}>
            <h1 className='text-3xl uppercase font-bold text-center text-blue-700'>Our Success</h1>
            <div className='glass mt-5 rounded p-10 px-20 text-black text-justify lg:px-72'>
                <h1>Customers are main Power of our Journey. Recently You Vote us for a nomination of Best Manufacturing Company and WebSite Ever. Thanks for Your Kind voting. Stay With us. We will arrives new offer recently</h1>
            </div>
        </div>
    );
};

export default OurSuccess;