import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSideBare = ({ children }) => {
    return (
        <div className=' max-w-7xl mx-auto px-8 py-10  mb-40'>
            {/* <label  class="btn btn-primary drawer-button ">Open drawer</label> */}



            <h1 className=' text-4xl text-center text-slate-700 font-bold' >DashBoard</h1>
            <label for="my-drawer-2" tabindex="0" class="btn btn-ghost btn-circle lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <div class="divider"></div>
            <div class="drawer w-full drawer-mobile lg:ml-8 h-full">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

                <div class="drawer-content ">
                    {children}
                </div>

                <div class="drawer-side  ">
                    <label for="my-drawer-2" class="drawer-overlay bg-green-500"></label>
                    <ul class="menu p-4 bg-base-100  overflow-y-auto w-80 text-base-content shadow-xl border-r-2">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='myOrders'>My Orders</NavLink></li>
                        <li><NavLink to='addReview'>Add Review</NavLink></li>
                        <li><NavLink to='myProfile'>My Profile</NavLink></li>

                        {/* for admin */}
                        <li><NavLink to='manageOrders'>Manage Orders</NavLink></li>
                        <li><NavLink to='addProduct'>Add Product</NavLink></li>
                        <li><NavLink to='manageProducts'>Manage Products</NavLink></li>
                        <li><NavLink to='makeAdmin'>Make Admin</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardSideBare;