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
                    <p className=' text-xs font-semibold'>{product.transactionId}</p></div> : <button for="my-modal" onClick={() => deleteItems(product._id, product.name)} className='py-1 px-4 bg-red-800 text-white rounded'>Cancle</button>
                }
            </td>
        </tr>


    );
};

export default MyOdersRow;








{/* <label for="my-modal" class="btn modal-button">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div> */}