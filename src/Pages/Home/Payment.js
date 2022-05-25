import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Sheard/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3NBXCh06gzhB0S1geM5yium3k895ze2SdDl0xPfKGHlAHOzrwsZTvdP6MteyFhH1pxcdYYvIfspx24xS0TFpOe00jX3UCJ6E');

const Payment = () => {
    const { id } = useParams()

    const url = `http://localhost:5000/orderProduct/${id}`

    const { data, isLoading } = useQuery(['payment', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }


    const product = data.data
    const totalPrice = (parseInt(product.price) * parseInt(product.quantity))



    return (
        <div className='w-8/10 mx-auto'>
            <div class=" bg-slate-300 ">
                <div className=" max-w-6xl mx-auto">
                    <h1 className=' text-3xl font-semibold text-primary ml-7 uppercase'>Payment</h1>
                    <hr className='h-[1px] w-5/12 border-green-500 mt-3 mb-12 ml-7' />
                </div>
                <div class=" bg-amber-200 py-10 mb-10 ">

                    <div class="card w-96 bg-base-100 shadow-xl mb-12 mx-auto">
                        <div class="card-body">
                            <div className="flex items-end justify-between">
                                <h2 class=" text-lg font-semibold text-green-800">Payment For : </h2>
                                <h2 class=" text-sm font-semibold text-gray-800">{product.name}</h2>

                            </div>
                            <hr className='border-green-800 border-opacity-30' />

                            <div className="flex items-center justify-between">
                                <div className="w-16">
                                    <img className=' rounded-xl' src={product.image} alt="product Image" />
                                </div>
                                <div>
                                    <h1 className='mb-1 font-mono text-xs uppercase'>Price/pes : <span className=' text-gray-800 font-semibold ml-7'>${product.price}</span></h1>
                                    <h1 className='mb-1 font-mono text-xs uppercase'>Quantity : <span className=' text-gray-800 font-semibold ml-10'>{product.quantity}</span></h1>
                                    <hr className='h-[1px] wfull my-1 border-green-500' />
                                    <h1 className=' font-mono text-xs uppercase'>Total Price : <span className=' text-green-800 font-semibold ml-4'>${totalPrice}</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                        <div className='card-body'>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;