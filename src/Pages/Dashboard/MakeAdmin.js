import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const { data: users, isLoading, refetch } = useQuery('user', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(users);

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
                    {
                        users.map((user, index) => <AdminRow key={user._id} index={index} user={user} refetch={refetch}></AdminRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MakeAdmin;