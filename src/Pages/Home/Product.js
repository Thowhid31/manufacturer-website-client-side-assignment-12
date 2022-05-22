import React from 'react';

const Product = ({ product }) => {

    return (
        <div class="card lg:max-w-lg bg-black shadow-xl">
            <figure class="px-10 pt-10">
                <img className='rounded' src={product.image} alt='' />
            </figure>
            <div class="card-body items-center">
                <h2 class="card-title text-2xl font-bold">{product.name}</h2>
                <p className='text-justify'>{product.description}</p>
                <div className='text-center'>
                    <div>
                        <p className='text-secondary font-bold '>Quantity: {product.quantity}</p>
                    </div>
                    <div>
                        <p className='font-bold text-red-600'> Min. Order: {product.minimum}</p>
                    </div>

                </div>
                <div class="card-actions">
                    <button  class="btn btn-primary uppercase">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;