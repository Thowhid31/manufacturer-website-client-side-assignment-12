import React from 'react';
import error404 from '../Assets/images/404-error-with-portals-pana.png'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-100' src={error404} alt="" />
        </div>
    );
};

export default ErrorPage;