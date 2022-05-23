import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import purchaseBG from '../Assets/images/purchase-2.jpg'

const PurchasePage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);


    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [product, productId])

    return (
        <div className='px-12' style={{
            background: `url(${purchaseBG})`,
            backgroundSize: 'cover'}}>
            <h1 className='text-center text-2xl mt-5 font-bold uppercase'>Your Purchase Information: {product.name}</h1>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <div className=' flex justify-center'>
            <div className="card w-96 glass">
                <figure><img src={product.image} alt="car!"/></figure>
                <div class="card-body">
                    <h2 class="text-2xl uppercase font-bold">{product.name}</h2>
                    <p className='text-justify'>{product.description}</p>
                    <div className='text-center'>
                    <div>
                        <p className='text-secondary font-bold '>Quantity: {product.quantity}</p>
                    </div>
                    <div>
                        <p className='font-bold text-red-600'> Min. Order: {product.minimum}</p>
                    </div>
                    <div>
                        <p className='font-bold'> Price: {product.price} <small>(per piece)</small></p> 
                    </div>

                </div>
                    <div class="card-actions justify-end mt-8">
                        <button class="btn btn-primary">Pay Now</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PurchasePage;