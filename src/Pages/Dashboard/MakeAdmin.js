import React, { useEffect, useState } from 'react';
import Loading from '../../Sheard/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const [users, setUsers] = useState([])



    useEffect(() => {
        fetch('https://menufecturer-website-server-production.up.railway.app/users', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [users])


    if (!users) {
        return <Loading></Loading>
    }

    return (
        <div className="w-full ">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead >
                    <tr>
                        <th className='pl-10'>Count</th>
                        <th>Email</th>
                        <th className='pl-20'>Role</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className='pl-14'>
                            <div className="font-bold">01</div>
                        </td>
                        <td>
                            <div className="font-bold">Joy Paul</div>
                        </td>
                        <td className='pl-8'>
                            <button className='py-1 px-4 border border-green-800 hover:bg-green-800 hover:text-white text-green-800 rounded'>Make Admin</button>
                        </td>
                    </tr>

                    <tr>
                        <td className='pl-14'>
                            <div className="font-bold">02</div>
                        </td>
                        <td>
                            <div className="font-bold">Raju Sarker</div>
                        </td>
                        <td className='pl-8'>
                            <button className='py-1 px-4 border border-green-800 hover:bg-green-800 hover:text-white text-green-800 rounded'>Make Admin</button>
                        </td>
                    </tr>

                    <tr>
                        <td className='pl-14'>
                            <div className="font-bold">03</div>
                        </td>
                        <td>
                            <div className="font-bold">Imran Khan</div>
                        </td>
                        <td className='pl-16'>
                            <button className=' text-green-800 font-medium '> Admin</button>
                        </td>
                    </tr>

                    <tr>
                        <td className='pl-14'>
                            <div className="font-bold">04</div>
                        </td>
                        <td>
                            <div className="font-bold">Arif Sikder</div>
                        </td>
                        <td className='pl-16'>
                            <button className=' text-green-800 font-medium '> Admin</button>
                        </td>
                    </tr>

                </tbody>

            </table>
        </div>
    );
};

export default MakeAdmin;