import { async } from '@firebase/util';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import userImg from '../../assect/user.png'


const AddReview = () => {


    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)


    const onSubmit = async (data) => {
        const ratting = data.ratting;
        if (parseInt(ratting) > 6) {
            return toast.error('Ratting Must be Under 5')
        }
        const reviewText = data.review;
        console.log(reviewText);
        const review = {
            review: reviewText,
            image: user?.photoURL,
            name: user?.displayName,
            ratting: ratting,
        }
        console.log(review);

        try {

            const { data } = await axios.post(`https://menufecturer-website-server-production.up.railway.app/review`, review,
                {
                    method: 'POST',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });

            if (!data.success) {
                return toast.error(data.error)
            }
            console.log(data);
            toast.success('Successfully Added Review');
            reset()

        } catch (error) {
            toast.error(error.message)
        }

    };




    return (
        <div className='w-full'>
            <h1 className=' text-3xl font-semibold text-primary ml-7 uppercase'>Add Review</h1>
            <hr className='h-[1px] w-5/12 mb-28 border-green-500 mt-3  ml-7' />

            <div className='w-10/12  relative mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='md:w-10/12 w-full mx-auto'>

                    <div className="form-control w-full ">
                        <textarea
                            type="text"
                            placeholder="Your Review"
                            className="textarea h-40 lg:h-60  textarea-success w-full pt-10"
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: 'Review is required'
                                }
                            })}
                        ></textarea>
                        <label className="label ">
                            {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.review?.message}</span>
                            }

                        </label>
                    </div>

                    <div className="avatar absolute md:top-[-20%] top-[-12%] lg:left-[45%] left-[42%]">
                        <div className="md:w-24 w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {
                                user?.photoURL ? <img src={user?.photoURL} /> : <img src={userImg} alt="userImg" />
                            }


                        </div>
                    </div>

                    <div className="form-control w-full ">
                        <input
                            type="number"
                            placeholder="Your Ratting"
                            className="input input-bordered w-full"
                            {...register("ratting", {
                                required: {
                                    value: true,
                                    message: 'Ratting is required'
                                }

                            })}
                        />
                        <label className="label">
                            {errors.ratting?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.ratting?.message}</span>
                            }

                        </label>
                    </div>


                    <div className=' text-center'> <input type='submit' value='submit' className='py-1 mt-4 px-5 bg-green-800 text-white rounded' /></div>
                </form>

            </div>
        </div>
    );
};

export default AddReview;