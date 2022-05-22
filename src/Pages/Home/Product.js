import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product}) => {

    const {_id, name, image, description, quantity, minimum, price} = product;

    const navigate = useNavigate();
    const purchaseBtnHandler = id => {
        navigate (`/purchase/${id}`)
    }

    return (
        <div class="card lg:max-w-lg bg-black shadow-xl">
            <figure class="px-10 pt-10">
                <img className='rounded' src={image} alt='' />
            </figure>
            <div class="card-body items-center">
                <h2 class="card-title text-2xl font-bold">{name}</h2>
                <p className='text-justify'>{description}</p>
                <div className='text-center'>
                    <div>
                        <p className='text-secondary font-bold '>Quantity: {quantity}</p>
                    </div>
                    <div>
                        <p className='font-bold text-red-600'> Min. Order: {minimum}</p>
                    </div>
                    <div>
                        <p className='font-bold'> Price: {price} <small>(per piece)</small></p> 
                    </div>

                </div>
                
            </div>
            <div class="card-actions">
                    <button onClick={()=>purchaseBtnHandler(_id)} class="btn btn-primary w-full uppercase">Book Now</button>


                    {/* <Link to='/purchase' onClick={()=>setPurchase(purchase)} class="btn btn-primary uppercase">Book Now</Link> */}
                </div>
        </div>
    );
};

export default Product;