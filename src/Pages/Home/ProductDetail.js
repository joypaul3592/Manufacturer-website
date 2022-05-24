import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Sheard/Loading';

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})


    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:5000/productDtails/${id}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if (!data?.success) return toast.error(data?.error);
            console.log(data)
            console.log(data.data)
            setProduct(data?.data);
        }
        fetchData()
    }, [])


    if (!product) {
        return <Loading></Loading>
    }



    return (
        <div className='xl:w-4/12 lg:w-6/12 mx-auto my-12'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={product.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center">
                        {product.name}
                    </h2>
                    <p>{product.dec}</p>
                    <p>Available Stok : <span>{product.stock}</span></p>
                    <p>Order Quantity : <span>75</span></p>
                    <button className='btn'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;