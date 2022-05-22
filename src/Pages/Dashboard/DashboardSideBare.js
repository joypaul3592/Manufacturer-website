import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSideBare = ({ children }) => {
    return (
        <div className=' max-w-7xl mx-auto px-8'>
            <h1 className='my-12 text-4xl text-center text-slate-700 font-bold' >DashBoard</h1>
            <div class="drawer w-full drawer-mobile  h-[80vh] mt-16">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {children}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side ">
                    <label for="my-drawer-2" class="drawer-overlay "></label>
                    <ul class="menu bg-base-100 p-4 overflow-y-auto w-80 text-base-content mr-8 rounded-r-2xl shadow-xl">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='myOrders'>My Orders</NavLink></li>
                        <li><NavLink to='addReview'>Add Review</NavLink></li>
                        <li><NavLink to='myProfile'>My Profile</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardSideBare;