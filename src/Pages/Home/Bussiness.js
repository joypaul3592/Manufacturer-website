import { AnnotationIcon, DesktopComputerIcon, UserGroupIcon } from '@heroicons/react/outline';
import React from 'react';
import businessBg from '../../assect/businessBg.webp'

const Bussiness = () => {
    return (
        <div className='py-16' style={{ backgroundImage: `url(${businessBg})` }}>
            <div className=' max-w-7xl mx-auto px-10 '>
                <h1 className='mb-12 text-4xl text-center text-primary font-bold' >MILLIONS BUSINESS TRUST US</h1>
                <div class="stats shadow glass py-8 w-full">

                    <div class="stat">
                        <div class="stat-figure text-primary  w-20 mx-auto">
                            <DesktopComputerIcon></DesktopComputerIcon>
                        </div>
                        <div class="stat-title text-white font-semibold">All Projects</div>
                        <div class="stat-value text-primary">257+</div>
                        <div class="stat-desc text-white font-semibold">21% more than last month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary  w-20 mx-auto">
                            <UserGroupIcon></UserGroupIcon>
                        </div>
                        <div class="stat-title text-white font-semibold">Clients</div>
                        <div class="stat-value text-secondary">189+</div>
                        <div class="stat-desc text-white font-semibold">21% more than last month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure w-20 mx-auto text-orange-400">
                            <AnnotationIcon></AnnotationIcon>
                        </div>
                        <div class="stat-title text-white font-semibold">Feedback</div>
                        <div class="stat-value text-orange-400">125+</div>
                        <div class="stat-desc text-white font-semibold">58% more than last month</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Bussiness;