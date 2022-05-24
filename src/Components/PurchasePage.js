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
            backgroundSize: 'cover'
        }}>
            <h1 className='text-center text-2xl font-bold mb-12 mt-11 uppercase'>Your Purchase Information: {product.name}</h1>

            <div className=' flex justify-center'>
                <div className="card w-96 glass">
                    <figure><img src={product.image} alt="car!" /></figure>
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
                                <p className='font-bold'> Price: {product.price} <small className="badge badge-xs">per piece</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="card w-full glass m-10 p-10">
                    <h1 className='text-2xl font-bold uppercase text-secondary mb-2'>Your details Info to purchase</h1>
                    <p className='text-2xl uppercase'>Name: {user?.displayName}</p>
                    <p className='text-2xl uppercase'>Email: {user?.email}</p>

              
                        <h1 className='text-xl mb-3 mt-2'>Quantity: </h1><input type="number" placeholder="Enter Your Quantity" class="input input-bordered input-secondary text-black w-full max-w-xs" max={product.quantity} min={product.minimum} />

                        <h1 className='text-xl mb-3 mt-2'>Address: </h1><input type="text" placeholder="Type here" class="input input-bordered input-secondary text-black w-full max-w-xs" />


                        <h1 className='text-xl mb-3 mt-2'>Phone: </h1><input type="number" placeholder="Type here" class="input input-bordered input-secondary text-black w-full max-w-xs" />



                        <div class="card-actions justify-end mt-8">
                            {/* <button class="btn btn-primary uppercase" type="submit" value='submit'>Confirm Purchase</button> */}
                            <input type="submit" value='Purchase Now' placeholder="Type here" className="btn btn-primary max-w-xs" />
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;