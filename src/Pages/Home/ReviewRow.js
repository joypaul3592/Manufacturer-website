import React from 'react';

const ReviewRow = ({ review }) => {

    console.log(review)
    const reviewText = review.review.slice(0, 170)

    return (
        <div className="card  bg-base-100 shadow-2xl">
            <div className="card-body">
                <div className="card-actions justify-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.image} />
                        </div>
                    </div>
                </div>
                <p> <span className='text-2xl font-mono text-primary'>"</span>{reviewText}  <span className='text-2xl font-mono text-primary'>"</span></p>
                <div className="flex items-center justify-between w-full ">
                    <div className=' flex items-center'>
                        <div class="rating rating-sm">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className=' ml-2'>{review.ratting}</p>
                    </div>
                    <p className=' text-right'>{review.name}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewRow;