import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import Button from '../../Sheard/Button';

const AddReview = () => {

    const [user] = useAuthState(auth)



    return (
        <div className='w-full'>
            <h1 className=' text-3xl font-semibold text-primary text-center '>Add Review</h1>
            <hr className='h-[1px] w-5/12 border-green-500 mt-3 mb-36 mx-auto' />
            <div className='w-10/12  relative mx-auto'>
                <textarea class="textarea h-40 lg:h-60  textarea-success w-full pt-10" placeholder="Your Review"></textarea>
                <div class="avatar absolute top-[-25%] left-[45%]">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <div className=' text-center'> <Button >Submit</Button></div>
            </div>
        </div>
    );
};

export default AddReview;