import React from 'react';
import headerBg from '../../assect/headerbg.webp'
import capimg from '../../assect/capimg.webp'




const Header = () => {
    return (
        <div>
            <div className=' h-screen lg:h-[80vh]' style={{
                backgroundImage: `url(${headerBg})`
            }}>
                <div className="hero h-full ">
                    <div className="hero-content flex-col justify-between lg:flex-row  w-full">

                        <div className='flex-1 w-full px-12 lg:px-0 text-left lg:pl-24 mb-16 lg:mb-0'>
                            <h1 class="text-6xl font-bold">Top Product <br /> Hand Tool <br /> 2022</h1>
                            <p className="py-6">Exclusive email offers & Limited time discount <br /> specials</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        <div className='flex-1 '>
                            <img src={capimg} className="w-9/12 mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;