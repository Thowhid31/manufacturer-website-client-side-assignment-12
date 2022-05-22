import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className='flex items-center'>
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.image} alt="" />
                    </div>
                </div>
                <div>
                    <h4 className='text-xl'>{review.name}
                    <p>{review.location}</p>
                    </h4>
                </div>
                </div>
            </div>
           
            <div>
                
            </div>
        </div>
    );
};

export default Review;