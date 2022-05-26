import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import OrdersRow from './OrdersRow';
import ProductsRow from './ProductsRow';

const ManageOrders = () => {
    const [reload, setReload] = useState(false)

    const { data: productsData, isLoading, refetch } = useQuery('user', () => fetch('http://localhost:5000/orders', {
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
                        <th>Name</th>
                        <th>Total Amount</th>
                        <th>Paid</th>
                        <th className='pl-7'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(product => <OrdersRow key={product._id} product={product} refetch={refetch} setReload={setReload}></OrdersRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default ManageOrders;