import { async } from '@firebase/util';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';


const AddReview = () => {


    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)


    const onSubmit = async (data) => {

        const reviewText = data.review;
        console.log(reviewText);
        const review = {
            review: reviewText,
            image: user?.photoURL,
            name: user?.displayName,
        }
        console.log(review);

        try {

            const { data } = await axios.post(`http://localhost:5000/review`, review,
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
            <h1 className=' text-3xl font-semibold text-primary text-center '>Add Review</h1>
            <hr className='h-[1px] w-5/12 border-green-500 mt-3 mb-36 mx-auto' />
            <div className='w-10/12  relative mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-10/12 mx-auto'>

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

                    <div className="avatar absolute top-[-25%] left-[45%]">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <div className=' text-center'> <input type='submit' value='submit' className='py-1 mt-4 px-5 bg-green-800 text-white rounded' /></div>
                </form>

            </div>
        </div>
    );
};

export default AddReview;