import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product}) => {

    const {_id, name, image, description, quantity, minimum, price} = product;

    const navigate = useNavigate();
    const purchaseBtnHandler = id => {
        navigate (`/product/${id}`)
    }

    return (
        <div className="card lg:max-w-lg bg-black shadow-xl">
            <figure className="px-10 pt-10">
                <img className='rounded' src={image} alt='' />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='text-justify'>{description}</p>
                <div className='text-center'>
                    <div>
                        <p className='text-secondary font-bold '>Quantity: {quantity}</p>
                    </div>
                    <div>
                        <p className='font-bold text-red-600'> Min. Order: {minimum}</p>
                    </div>
                    <div>
                        <p className='font-bold'> Price: {price} <small className="badge badge-xs">per piece</small></p> 
                    </div>

                </div>
                
            </div>
            <div className="card-actions">
                    <button onClick={()=>purchaseBtnHandler(_id)} className="btn btn-primary w-full uppercase">Book Now</button>
                </div>
        </div>
    );
};

export default Product;