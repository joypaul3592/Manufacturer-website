import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MyOdersRow = ({ product }) => {


    console.log(product);


    const [deletes, setDeletes] = useState(false)


    useEffect(() => {
        console.log('kaj hocce');
    }, [deletes, product])


    const deleteItems = (id, name) => {
        const deleteItems = window.confirm(`Want To Cancle ${name} ?`)
        if (deleteItems) {

            fetch(`http://localhost:5000/userOrder/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setDeletes(!true)
                        toast.success(`Successfully Cancle ${name}`)
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
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded w-12 h-12 ">
                            <img src={product.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{product.name}</div>

                    </div>
                </div>
            </td>
            <td>
                <h1 className=' font-semibold text-green-800'>${product.price}</h1>
            </td>
            <td>
                <button className='py-1 px-4 bg-green-800 text-white rounded'>Pay</button>
            </td>
            <td>
                <button onClick={() => deleteItems(product._id, product.name)} className='py-1 px-4 bg-red-800 text-white rounded'>Cancle</button>

            </td>

        </tr>


    );
};

export default MyOdersRow;