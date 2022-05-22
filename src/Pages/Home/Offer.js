import React from 'react';
import offerMan from '../../assect/offerman.webp'
import offerBannar1 from '../../assect/offerBannar1.webp'
import offerBannar2 from '../../assect/offerBannar2.webp'


const Offer = () => {
    return (
        <div className='max-w-7xl mx-auto my-56 px-8'>
            <h1 className='mb-12 text-4xl text-center text-primary font-bold' >Get Offer!</h1>
            <div className=' grid lg:grid-cols-2 grid-cols-1 gap-6'>
                <div className='h-[500px] overflow-hidden' style={{ backgroundImage: `url(${offerMan})`, backgroundSize: 'cover' }}>
                    <div className="text-left ml-8">
                        <p className='text-sm font-bold opacity-70 mt-16'>COLLECTION SALE</p>
                        <h1 className='text-3xl font-extrabold text-left mb-4 '>YOU’LL BE HAPPY TO <br /> SEE OUR AWESOME <br /> <span className='text-primary'>FEATURES.</span></h1>
                        <p className='font-semibold mb-5'>Sale 20% off your Collection days</p>
                        <button className='btn btn-sm btn-primary'>SHOP NOW</button>
                    </div>
                </div>
                <div className=' grid grid-rows-2 gap-6'>
                    <div style={{ backgroundImage: `url(${offerBannar1})`, backgroundSize: 'cover' }}>
                        <div className="text-right mr-8">
                            <p className='text-sm font-bold opacity-70 mt-16'>ACCESSORIES</p>
                            <h1 className='text-3xl font-extrabold mb-4 '><span className='text-primary'>20% OFF</span> <br />TOOLS GARDEN</h1>
                            <button className='btn btn-sm btn-primary'>SHOP NOW</button>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${offerBannar2})`, backgroundSize: 'cover' }}>
                        <div className="text-left ml-8">
                            <p className='text-sm font-bold opacity-70 mt-16'>NEW ARRIVALS</p>
                            <h1 className='text-3xl font-extrabold mb-4 '><span className='text-primary'>50% OFF</span> <br />STEEL PLIERS</h1>
                            <button className='btn btn-sm btn-primary'>SHOP NOW</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Offer;