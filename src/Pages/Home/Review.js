import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-blue-200 text-black shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.image} alt="" />
                    </div>
                </div>
                <div>
                    <h4 className='text-xl font-bold'>{review.name}

                    <h3 className='text-green-600'>Ratings: {review.ratings}</h3>
                    
                    </h4><p>{review.location}</p>
                </div>
                </div>
            </div>
           
            <div>
                
            </div>
        </div>
    );
};

export default Review;