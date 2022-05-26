import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import EditProfile from './EditProfile';

const DasMyProfiles = () => {


    const [user] = useAuthState(auth);
    const [edit, setEdit] = useState(false)

    return (
        <div className='w-full '>
            <h1 className=' text-3xl font-semibold text-primary ml-7 uppercase'>My Profile</h1>
            <hr className='h-[1px] w-5/12 border-green-500 mt-3  ml-7' />
            <div>
                <div className='w-10/12 mx-auto border mt-12 mb-5 border-green-400  text-center py-8 rounded-xl'>
                    <div className="avatar ">
                        <div className="w-24 rounded-full ">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <br />
                    <h1 className='text-gray-600 text-md mt-5 font-semibold uppercase'>{user?.displayName}</h1>
                    <p className=' text-gray-500 text-sm'>{user.email}</p>
                    <br />
                    <label onClick={() => setEdit(!edit)} className='py-[2px] px-4 border border-green-800  text-green-800 text-sm rounded cursor-pointer'>Edit Profile</label>
                </div>


                {edit && <div className="py-10 ">
                    <div>
                        <label className="drawer-overlay"></label>
                        <ul className="menu p-4 px-16 mx-auto overflow-y-auto w-full  mr-20 text-base-content bg-white">

                            <EditProfile></EditProfile>
                        </ul>
                    </div>

                </div>}
            </div>
        </div>
    );
};

export default DasMyProfiles;