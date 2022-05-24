import React from 'react';
import purchaseBG from '../../Assets/images/purchase-2.jpg'

const MyProfile = () => {
    return (
        <div className='px-12' style={{
            background: `url(${purchaseBG})`,
            backgroundSize: 'cover'}}>
            <h1>My Profile</h1>
        </div>
    );
};

export default MyProfile;