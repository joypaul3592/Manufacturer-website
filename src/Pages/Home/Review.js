import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewRow from './ReviewRow';

const Review = () => {



    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setReviews(data.data)
            })
    }, [])



    return (
        <div className='max-w-7xl mx-auto my-16 px-8'>
            <h1 className='mb-12 text-4xl text-center text-primary font-bold' >Customar Say</h1>



            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    reviews?.map(review => <ReviewRow key={review._id} review={review}></ReviewRow>)
                }
            </div>
        </div>
    );
};

export default Review;