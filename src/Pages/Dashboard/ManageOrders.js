import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Sheard/Loading';
import OrdersRow from './OrdersRow';
import ProductsRow from './ProductsRow';

const ManageOrders = () => {

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
                        <th>Price</th>
                        <th className='pl-7'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(product => <OrdersRow key={product._id} product={product}></OrdersRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default ManageOrders;