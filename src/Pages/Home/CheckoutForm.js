import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../Sheard/Loading';

const CheckoutForm = ({ product }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transsactionId, setTranssactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');


    const price = (parseInt(product.price) * parseInt(product.quantity))
    console.log(price);
    const id = product._id

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch('https://vast-headland-56370.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [price]);




    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true)
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: product.name,
                        email: product.email,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError.message);
            setProcessing(false)

        } else {
            console.log(paymentIntent);
            setTranssactionId(paymentIntent.id)
            setCardError('')
            setSuccess('Your Payment is Completed')
            toast.success('Your Payment is Completed');



            // payment info
            const payment = {
                order: id,
                transsactionId: paymentIntent.id
            }


            // update db
            fetch(`https://vast-headland-56370.herokuapp.com/upOrder/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),

            }).then(res => res.json()).then(data => {
                setProcessing(false)
                console.log(data)
            })
        }
    }




    return (
        <div>
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
                <button className=' bg-primary rounded pb-[3px] text-white mt-5 px-5 cursor-pointer' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className=' mt-3 text-red-700'>{cardError}</p>
            }
            {
                success && <div>
                    <p className=' mt-3 text-green-700'>{success}</p>
                    <p className='mt-0 text-xs text-green-700'>Your transsaction id : <span className=' text-orange-700 font-semibold text-xs'>{transsactionId}</span></p>

                </div>
            }
        </div>
    );
};

export default CheckoutForm;