import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const OrdersRow = ({ product, refetch }) => {


    const totalPrice = (parseInt(product.price) * parseInt(product.quantity))

    // delete Unpaid Order
    const deleteItems = (id, name) => {
        const deleteItems = window.confirm(`Want To Delete ${name} ?`)
        if (deleteItems) {

            fetch(`https://menufecturer-website-server-production.up.railway.app/userOrder/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        console.log(data);
                        refetch()
                        toast.success(`Successfully Delete ${name}`)
                    }
                })
        }
        else {
            return toast.error('Cancle By User')
        }
    }

    // hander panding and shifting
    const handelPanding = async (id) => {

        const paidInfo = {
            status: 'shipped',
        }

        const { data } = await axios.put(`https://menufecturer-website-server-production.up.railway.app/paidUpInfo/${id}`, paidInfo, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        });

        if (!data.success) {
            return toast.error(data.error)
        }
        console.log(data);
        toast.success('SuccessFully Updated');
        refetch()
    }



    console.log(product);


    return (
        <tr>
            <td className='pl-9'>

                <div className="avatar">
                    <div className="mask rounded w-12 h-12 ">
                        <img src={product.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>
                <div className="font-bold">{product.name}</div>
            </td>
            <td className='pl-10'>
                <h1 className=' font-semibold text-green-800'>${totalPrice}</h1>
            </td>

            <td>
                {product.paid ? <button onClick={() => handelPanding(product._id)} >{product.status ? <p className=' text-xl font-semibold font-mono text-green-800'>Shipped</p> : <button className='py-1 px-4 bg-purple-900 text-white rounded'>Panding</button>}</button> : <h1 className=' text-gray-900 font-bold ml-4 rounded'>Unpaid</h1>}

            </td>
            <td>
                {product.paid ? '' : <button onClick={() => deleteItems(product._id, product.name)} className='py-1 px-4 bg-red-900 text-white rounded'>Delete</button>}
            </td>

        </tr>


    );
};

export default OrdersRow;