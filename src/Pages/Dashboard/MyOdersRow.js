import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOdersRow = ({ product, setReload }) => {


    console.log(product);





    const deleteItems = (id, name) => {
        const deleteItems = window.confirm(`Want To Cancle ${name} ?`)

        if (deleteItems) {

            fetch(`https://vast-headland-56370.herokuapp.com/userOrder/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setReload(true)
                        toast.success(`Successfully Cancle ${name}`);
                    }
                })
        }
        else {
            return toast.error('Cancle By User')
        }

    }


    const totalPrice = (parseInt(product.price) * parseInt(product.quantity))


    return (
        <tr>
            <td className='pl-9'>
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src={product.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <h1 className=' font-semibold text-green-800'>${product.price}</h1>
            </td>
            <td className='pl-12'>
                <h1 className=' font-semibold text-gray-800'>{product.quantity}</h1>
            </td>
            <td className='pl-8'>
                <h1 className=' font-semibold text-green-800'>${totalPrice}</h1>
            </td>
            <td>
                {product.paid ? <p className=' text-xl text-green-800 font-semibold ml-2'>Paid</p> : <Link to={`/dashboard/payment/${product._id}`}><button className='py-1 px-4 bg-green-800 text-white rounded'>Pay</button></Link>}
            </td>
            <td>
                {product.paid ? <div><p className=' text-xs font-semibold'>Transection ID :</p>
                    <p className=' text-xs font-semibold text-green-800'>{product.transactionId}</p></div> : <button onClick={() => deleteItems(product._id, product.name)} className='py-1 px-4 bg-red-800 text-white rounded'>Cancle</button>
                }
            </td>
        </tr>


    );
};

export default MyOdersRow;

