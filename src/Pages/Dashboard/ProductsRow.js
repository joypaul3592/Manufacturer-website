import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProductsRow = ({ product }) => {



    const [deletes, setDeletes] = useState(false)


    useEffect(() => {
        console.log('k');
    }, [deletes])


    const deleteItems = (id, name) => {
        const deleteItems = window.confirm(`Want To Delete ${name} ?`)
        if (deleteItems) {

            fetch(`https://vast-headland-56370.herokuapp.com/userProduct/${id}`, {
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
            <td>
                <h1 className=' font-semibold text-green-800'>${product.price}</h1>
            </td>

            <td>
                <button onClick={() => deleteItems(product._id, product.name)} className='py-1 px-4 bg-red-800 text-white rounded'>Delete</button>

            </td>

        </tr>


    );
};

export default ProductsRow;