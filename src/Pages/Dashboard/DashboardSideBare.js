import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../Hook/useAdmin';

const DashboardSideBare = ({ children }) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);



    return (
        <div className=' max-w-7xl mx-auto px-8 py-10  mb-40'>

            <h1 className=' text-4xl text-center text-slate-700 font-bold' >DashBoard</h1>
            <label for="my-drawer-2" tabindex="0" className="btn btn-ghost btn-circle lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <div className="divider"></div>
            <div className="drawer w-full drawer-mobile lg:ml-8 h-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content ">
                    {children}
                </div>

                <div className="drawer-side  ">
                    <label for="my-drawer-2" className="drawer-overlay bg-green-500"></label>
                    <ul className="menu p-4 bg-base-100  overflow-y-auto w-80 text-base-content shadow-xl border-r-2">
                        {/* User Route */}

                        {
                            !admin && <li><NavLink to='myOrders'>My Orders</NavLink></li>
                        }
                        {
                            !admin && <li><NavLink to='addReview'>Add Review</NavLink></li>
                        }



                        {/* Commoun Route */}
                        <li><NavLink to='myProfile'>My Profile</NavLink></li>




                        {/* Admin Route */}

                        {
                            admin && <li><NavLink to='manageOrders'>Manage Orders</NavLink></li>
                        }
                        {
                            admin && <li><NavLink to='addProduct'>Add Product</NavLink></li>
                        }
                        {
                            admin && <li><NavLink to='manageProducts'>Manage Products</NavLink></li>
                        }
                        {
                            admin && <li><NavLink to='makeAdmin'>Make Admin</NavLink></li>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardSideBare;