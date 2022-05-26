import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import EditProfile from './EditProfile';

const DasMyProfiles = () => {


    const [user] = useAuthState(auth);
    const [edit, setEdit] = useState(false)


    const email = user?.email;
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/upUserInfo/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                setUserInfo(data.data)
            })
    }, [userInfo])

    console.log(userInfo)


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
                    <label onClick={() => setEdit(!edit)} className='py-[2px] px-4 border border-green-800  text-green-800 text-sm rounded cursor-pointer'>{userInfo?._id ? 'Update Profile' : 'Edit Profile'}</label>

                    {userInfo?._id && <hr className=' mt-4 w-10/12 mx-auto' />}
                    {userInfo?._id && <div className='mt-7'>
                        <h1 className=' text-green-800 font-mono'>INFO</h1>
                        <hr className=' w-2/12 mb-3 border-green-800 mx-auto' />
                        <div>
                            <h1 className=' text-sm font-semibold'>Education : <span className=' text-green-800 text-sm ml-2'>{userInfo.education}</span></h1>
                            <h1 className=' text-sm font-semibold'>Address : <span className=' text-green-800 text-sm ml-2'>{userInfo.address}</span></h1>
                            <h1 className=' text-sm font-semibold'>Date-Of-Birth : <span className=' text-green-800 text-sm ml-2'>{userInfo.birthday}</span> </h1>
                            <h1 className=' text-sm font-semibold'>Phone : <span className=' text-green-800 text-sm ml-2'>{userInfo.phone}</span></h1>
                        </div>

                    </div>}
                </div>


                {edit && <div className="py-10 ">
                    <div>
                        <label className="drawer-overlay"></label>
                        <ul className="menu p-4 px-5 md:px-16 mx-auto overflow-y-auto w-full  mr-20 text-base-content bg-white">

                            <EditProfile></EditProfile>
                        </ul>
                    </div>

                </div>}
            </div>
        </div>
    );
};

export default DasMyProfiles;