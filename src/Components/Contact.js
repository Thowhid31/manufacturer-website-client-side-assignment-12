import React from 'react';
import purchaseBG from '../Assets/images/purchase-2.jpg'


const Contact = () => {
    return (
        <div className='px-12 h-screen' style={{
            background: `url(${purchaseBG})`,
            backgroundSize: 'cover'
        }}>
            <div className='flex justify-center items-center mt-48 text-2xl p-5'>
            <div className='w-96 glass rounded p-8'>
            <h1 className='text-secondary text-center uppercase text-3xl mb-4'>Contact</h1>
            <h2>
                <h2 className='text-secondary text-center mb-3'>Computer Mechanism</h2>
                <p>Call: 0170909090909</p>
                <p>Email: abc@gmail.com</p>
                <p>Address: 395/2, Banani, Dhaka-1302</p>
                <h6 >Website: www.cm.bd.com</h6>
            </h2>
            </div>
            </div>
        </div>
    );
};

export default Contact;