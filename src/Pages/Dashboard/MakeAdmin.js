import React, { useEffect, useState } from 'react';
import Loading from '../../Sheard/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {

    const [users, setUsers] = useState([])



    useEffect(() => {
        fetch('https://vast-headland-56370.herokuapp.com/users', {
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
                    {
                        users?.map((user, index) => <AdminRow key={user._id} index={index} user={user} ></AdminRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MakeAdmin;