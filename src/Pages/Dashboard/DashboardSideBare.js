import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSideBare = ({ children }) => {
    return (
        <div className=' max-w-7xl mx-auto px-8 '>
            <h1 className='my-12 text-4xl text-center text-slate-700 font-bold' >DashBoard</h1>
            <div class="divider"></div>
            <div class="drawer w-full drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

                <div class="drawer-content  ">
                    {children}
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side h-[50vh] mt-16 ">
                    <label for="my-drawer-2" class="drawer-overlay "></label>
                    <ul class="menu bg-base-100 p-4 overflow-y-auto w-80 text-base-content mr-8 rounded-r-2xl shadow-xl">
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