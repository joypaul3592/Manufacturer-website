import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ConfiemProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})


    // Load data form DB
    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:5000/orderDtails/${id}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if (!data?.success) return toast.error(data?.error);
            setProduct(data?.data);
        }
        fetchData()
    }, [])




    console.log(product);



    return (
        <div>
            <h1>This is Confirm Order Page {id}</h1>
        </div>
    );
};

export default ConfiemProduct;