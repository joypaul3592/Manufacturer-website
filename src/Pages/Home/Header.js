import React from 'react';
import headerBg from '../../assect/headerbg.webp'
import BannarImg from '../../assect/Bannar.png'




const Header = () => {
    return (
        <div>
            <div className=' h-full' style={{
                backgroundImage: `url(${headerBg})`
            }}>
                <div className="hero h-full xl:py-20 py-10 ">
                    <div className="hero-content flex-col justify-between lg:flex-row  w-full">
                        <div className='flex-1  w-full md:px-12 lg:px-0 text-left  mb-16 lg:mb-0'>
                            <h1 className="md:text-7xl text-5xl leading-[4rem] md:leading-[6rem] font-bold">Top Product  Hand Tool  2022</h1>
                            <p className="py-6">Exclusive email offers & Limited time discount <br /> specials Products and so many offer on the black friday.</p>
                            <button className=" py-2 px-6 bg-green-600 text-white border border-green-600 hover:bg-transparent hover:text-green-600 transition-all duration-300 ease-in-out rounded-md font-medium">Get Started</button>
                        </div>
                        <div className='flex-1 '>
                            <img src={BannarImg} className="w-full mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;