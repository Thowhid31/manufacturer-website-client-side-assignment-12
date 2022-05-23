import React from 'react';
import BSummary from './BSummary';
import purchaseBG from '../../Assets/images/purchase-2.jpg'


const BusinessSummary = () => {
    return (
        <div className='h-screen pt-24' style={{
            background: `url(${purchaseBG})`,
            backgroundSize: 'cover'}}>
            <BSummary></BSummary>
        </div>
    );
};

export default BusinessSummary;