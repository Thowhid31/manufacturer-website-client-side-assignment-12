import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L0Us5A4HPuCHW2LKOm7foxYCz3Wqe3PJCM5YrIS6qIWs2ZjDQAE2wAJrnpqp8lJD09wft5X5JBnRDESSKh9Ib8w00usanoxlr');

const Payment = () => {

    const { id } = useParams();

    const url = `http://localhost:5000/orders/${id}`;

    const { data: parts, isLoading } = useQuery(['Order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center items-center'>
            <div>
                <div class="card w-50 max-w-md bg-blue-200 shadow-xl my-10 text-black">
                    <div class="card-body">
                        <h1 className='text-blue-700 uppercase font-bold'>Hello, {parts.email}</h1>
                        <h2 class="card-title">Pay for {parts.productName}</h2>
                        <p>Your Delivery Done by us, within: 30 days.</p>
                        <div class="card-actions justify-end">
                            <p>Please Pay : ${parts.price}</p>

                        </div>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-blue-200 text-black">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm parts={parts} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;