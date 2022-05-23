import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MyOdersRow = ({ product }) => {





    const [deletes, setDeletes] = useState(false)


    useEffect(() => {
        console.log('kaj hocce');
    }, [deletes])


    const deleteItems = (id, name) => {
        const deleteItems = window.confirm(`Want To Delete ${name} ?`)
        if (deleteItems) {

            fetch(`http://localhost:5000/userProduct/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setDeletes(!true)
                        toast.success(`Successfully Delete ${name}`)
                    }
                })
        }
        else {
            return toast.error('Cancle By User')
        }

    }







    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask rounded w-12 h-12 ">
                            <img src={product.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{product.name}</div>

                    </div>
                </div>
            </td>
            <td>
                <h1 className=' font-semibold'>{product.price}</h1>
            </td>
            <td>
                <button className='py-1 px-4 bg-slate-800 text-white rounded'>Pay</button>
            </td>
            <td>
                <button onClick={() => deleteItems(product._id, product.name)} className='py-1 px-4 bg-red-800 text-white rounded'>Cancle</button>

            </td>

        </tr>


    );
};

export default MyOdersRow;