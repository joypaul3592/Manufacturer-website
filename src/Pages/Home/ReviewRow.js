import React from 'react';

const ReviewRow = ({ review }) => {
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
                <p> <span className='text-2xl font-mono text-primary'>"</span>{review.review}  <span className='text-2xl font-mono text-primary'>"</span></p>
            </div>
        </div>
    );
};

export default ReviewRow;