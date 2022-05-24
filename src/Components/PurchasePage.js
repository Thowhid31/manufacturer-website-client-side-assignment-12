import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import purchaseBG from '../Assets/images/purchase-2.jpg'
import { toast } from 'react-toastify';

const PurchasePage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [number, setNumber] = useState(10)
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [product, productId])


    const incNum = () => {
        if (number < product.quantity) {
            setNumber(Number(number) + 1);
        }
    };
    const decNum = () => {
        if (number > 10) {
            setNumber(number - 1);
        }
    }


    const handleChange = (e) => {
        setNumber(e.target.value);
    };

    const totalPrice = parseInt(number) * parseInt(product.price);


    const handleOrder = event => {
        event.preventDefault()
        const order = {
            productName: product.name,
            email: user.email,
            price: totalPrice,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value,
            address: event.target.address.value
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })

        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Purchase Succeed, Check My Orders to Pay')
                event.target.reset();
            }
        })
    
    }




    return (
        <div className='px-12' style={{
            background: `url(${purchaseBG})`,
            backgroundSize: 'cover'
        }}>
            
                <h1 className='text-center text-2xl font-bold mb-12 mt-11 uppercase'>Your Purchase Information: {product.name}</h1>
            <div className=' lg:flex flex-row'>
                <div className='lg:flex-1 items-center'>
                    <div className="card glass m-10 p-10">
                        <figure><img src={product.image} alt="car!" /></figure>
                        <div class="card-body ">
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
                <div className='lg:flex-1'>
                    <div className=" card glass m-10 p-10">
                        <h1 className='text-2xl font-bold uppercase text-secondary mb-2'>Your details Info to purchase</h1>
                        <p className='text-2xl uppercase'>Name: {user?.displayName}</p>
                        <p className='text-2xl uppercase'>Email: {user?.email}</p>


                        

                        <form onSubmit={handleOrder} className='w-full text-xl text-black'>
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Name</span>
                            </label>
                            <input type="text" readOnly value={user.displayName} className="input input-bordered w-full input-sm max-w-xs" />

                            <label className="label">
                                <span className="label-text font-semibold text-lg">Email</span>
                            </label>
                            <input type="email" readOnly value={user.email} className="input input-bordered w-full input-sm max-w-xs" />

                            <label className="label">
                                <span className="label-text font-semibold text-lg">Product Quantity</span>
                            </label>
                            <input type="number" min={product.minimum} max={product.available} name='quantity' readOnly value={number} className="input input-bordered input-sm w-full max-w-xs" />



                            <div className="col-xl-1 mt-2">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button className="btn btn-error rounded-full" type="button" onClick={decNum}>—</button>
                                </div>
                                <input type="number" className="form-control w-12 text-center" value={number} onChange={handleChange} />
                                <div className="input-group-prepend">
                                    <button className="btn btn-success" type="button" onClick={incNum}>+</button>
                                </div>
                            </div>
                        </div>



                            <label className="label">
                                <span className="label-text font-semibold text-lg">Total Price</span>
                            </label>
                            <input type="number" readOnly value={totalPrice} className="input input-bordered input-sm w-full max-w-xs" />

                            <label className="label">
                                <span className="label-text font-semibold text-lg">Address</span>
                            </label>
                            <input type="text" name='address' className="input input-bordered w-full input-sm max-w-xs" required />

                            <label className="label">
                                <span className="label-text font-semibold text-lg">Phone</span>
                            </label>
                            <input type="number" name='phone' className="input input-bordered w-full input-sm max-w-xs mb-4" required />

                            <br/>

                            <input type="submit" value="Purchase Now" className="btn btn-accent uppercase" />


                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;