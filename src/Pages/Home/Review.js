import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Review = () => {



    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setReviews(data.data)
            })
    }, [reviews])







    return (
        <div className='max-w-7xl mx-auto my-16 px-8'>
            <h1 className='mb-12 text-4xl text-center text-primary font-bold' >Customar Say</h1>



            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="card  bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://api.lorem.space/image/face?hash=3174" />
                                </div>
                            </div>
                        </div>
                        <p> <span className='text-2xl font-mono text-primary'>"</span>{reviews.length} <span className='text-2xl font-mono text-primary'>"</span></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;