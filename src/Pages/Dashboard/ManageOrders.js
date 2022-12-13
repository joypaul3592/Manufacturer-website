import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import OrdersRow from './OrdersRow';
import ProductsRow from './ProductsRow';

const ManageOrders = () => {
    const [reload, setReload] = useState(false)

    const { data: productsData, isLoading, refetch } = useQuery('user', () => fetch('https://menufecturer-website-server-production.up.railway.app/orders', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const products = productsData?.data;


    return (
        <div className="w-full ">
            <table className="table w-full">
                <thead >
                    <tr>
                        <th className='pl-10'>Image</th>
                        <th className='pl-16'>Name</th>
                        <th>Total Amount</th>
                        <th className='pl-9'>Paid</th>
                        <th className='pl-7'>Status</th>
                    </tr>
                </thead>
                {products ?
                    <tbody>
                        {
                            products?.map(product => <OrdersRow key={product._id} product={product} refetch={refetch} setReload={setReload}></OrdersRow>)
                        }
                    </tbody> : <h1 className=' ml-10 mt-10 text-xl font-medium text-green-600'>Please Login</h1>
                }

            </table>
        </div>
    );
};

export default ManageOrders;