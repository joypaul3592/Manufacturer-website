import React from 'react';
import { toast } from 'react-toastify';


const AdminRow = ({ user, index }) => {

    const { email, role } = user;
    console.log(email);

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Made Admin');

                }
            })
    }



    return (
        <tr>
            <td className='pl-14'>
                <div className="font-bold">{index + 1}</div>
            </td>
            <td>
                <div className="font-bold">{user.email}</div>
            </td>

            <td className='pl-8'>
                {role !== 'admin' ? <button onClick={makeAdmin} className='py-1 px-4 border border-green-800 hover:bg-green-800 hover:text-white text-green-800 rounded'>Make Admin</button> : <h1 className=' text-lg text-purple-800 ml-8 font-semibold'>Admin</h1>}
            </td>

        </tr>


    );
};

export default AdminRow;