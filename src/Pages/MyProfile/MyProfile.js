import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import EditProfile from '../Dashboard/EditProfile';
const MyProfile = () => {


    const [user] = useAuthState(auth);

    return (
        <div className='w-full'>
            <div className=' mt-12'>
                <div className=" max-w-6xl mx-auto">
                    <h1 className=' text-3xl font-semibold text-primary ml-7 uppercase'>My Profile</h1>
                    <hr className='h-[1px] w-5/12 border-green-500 mt-3 mb-12 ml-7' />
                </div>
                <div>
                    <div className=' max-w-7xl mx-auto '>
                        <div className='w-10/12 mx-auto border border-green-400  text-center py-8 rounded-xl'>
                            <div className="avatar ">
                                <div className="w-24 rounded-full ">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <br />
                            <h1 className='text-gray-600 text-md mt-5 font-semibold uppercase'>{user?.displayName}</h1>
                            <p className=' text-gray-500 text-sm'>{user.email}</p>
                            <br />
                            <label for="my-drawer" className='pt-[2px] pb-[4px] px-4 border border-green-800 hover:bg-green-800 hover:text-white  text-green-800 text-sm rounded cursor-pointer'>Edit Profile</label>
                        </div>
                    </div>


                    <div className="py-10 ">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                        <div className="drawer-side ">
                            <label for="my-drawer" className="drawer-overlay"></label>
                            <ul className="menu lg:px-28 xl:px-96 md:px-16  mx-auto overflow-y-auto w-full  text-base-content bg-white">

                                <EditProfile></EditProfile>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;