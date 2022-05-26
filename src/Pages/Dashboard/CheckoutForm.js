import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({parts}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('')

    const {price, email } = parts;

    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => {
                if(data?.clientSecret){
                    setClientSecret(data.clientSecret)
                }
        })
    },[price])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error?.message)
        }
        else {
            setCardError('')
        }

        setCardSuccess('')
        //confirm payment with card
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: email

                },
              },
            },
          );

          if(intentError){
              setCardError(intentError?.message);
              
          } 
          else{
              setCardError('');
              console.log(paymentIntent);
              setCardSuccess('Hey Buddy, Your Payment is Done!')
          }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-error btn-xs mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                cardSuccess && <p className='text-green-600'>{cardSuccess}</p>
            }
        </>
    );
};

export default CheckoutForm;