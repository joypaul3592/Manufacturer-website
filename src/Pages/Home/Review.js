import React from 'react';

const Review = () => {
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <h1 className='mb-12 text-4xl text-center text-primary font-bold' >Customar Say</h1>

            <div className="grid grid-cols-3 gap-5">
                <div class="card w-96 bg-base-100 shadow-2xl">
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <div class="avatar">
                                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://api.lorem.space/image/face?hash=3174" />
                                </div>
                            </div>
                        </div>
                        <p> <span className='text-2xl font-mono text-primary'>"</span> This is good product that i used in the time , its quality is very good and sellar behabior is very nice <span className='text-2xl font-mono text-primary'>"</span></p>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-2xl">
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <div class="avatar">
                                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://api.lorem.space/image/face?hash=3174" />
                                </div>
                            </div>
                        </div>
                        <p> <span className='text-2xl font-mono text-primary'>"</span> This is good product that i used in the time , its quality is very good and sellar behabior is very nice <span className='text-2xl font-mono text-primary'>"</span></p>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-2xl">
                    <div class="card-body">
                        <div class="card-actions justify-center">
                            <div class="avatar">
                                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://api.lorem.space/image/face?hash=3174" />
                                </div>
                            </div>
                        </div>
                        <p> <span className='text-2xl font-mono text-primary'>"</span> This is good product that i used in the time , its quality is very good and sellar behabior is very nice <span className='text-2xl font-mono text-primary'>"</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;