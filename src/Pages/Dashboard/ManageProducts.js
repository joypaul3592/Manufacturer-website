import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useProduct from '../../Hook/useProduct';
import MyOdersRow from './MyOdersRow';
import ProductsRow from './ProductsRow';

const ManageProducts = () => {

    const [products, setProducts] = useProduct()

    return (
        <div className="w-full ">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead >
                    <tr>
                        <th className='pl-10'>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th className='pl-7'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <ProductsRow key={product._id} product={product}></ProductsRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default ManageProducts;