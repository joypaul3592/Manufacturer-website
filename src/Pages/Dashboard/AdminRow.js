import React from 'react';


const AdminRow = ({ user }) => {

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded w-12 h-12 ">
                            <img src={user.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{user.name}</div>

                    </div>
                </div>
            </td>
            <td>
                <h1 className=' font-semibold'>{user.price}</h1>
            </td>
            <td>
                <button className='py-1 px-4 bg-slate-800 text-white rounded'>Pay</button>
            </td>
            <td>
                <button className='py-1 px-4 bg-red-800 text-white rounded'>Cancle</button>

            </td>

        </tr>


    );
};

export default AdminRow;