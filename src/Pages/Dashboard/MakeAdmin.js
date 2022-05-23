import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const { data: users, isLoading } = useQuery('user', () => fetch('http://localhost:5000/users').then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className="w-full ">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead >
                    <tr>
                        <th className='pl-10'>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th className='pl-7'>Cancle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <AdminRow key={user._id} user={user}></AdminRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MakeAdmin;