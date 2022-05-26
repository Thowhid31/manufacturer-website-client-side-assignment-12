import React, { useEffect, useState } from 'react';
import quote from '../../Assets/icons/My project (1).png';
import Review from './Review';

const Reviews = () => {

    const [review, setReview] = useState([]);


    useEffect(()=>{
        fetch('https://morning-sea-61188.herokuapp.com/review')
        .then(res=> res.json())
        .then(data => setReview(data));
    },[])

    return (
        <div className='my-20 px-12'>
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-xl text-primary font-bold uppercase">Reviews</h3>
                    <h2 className='text-3xl'>What our Customer Say!</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 '>
                {
                    review?.slice(-3).map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;