import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import MyOdersRow from './MyOdersRow';

const MyOrders = () => {

    const [userProducts, setUserProducts] = useState([]);

    const [user] = useAuthState(auth)
    const email = user?.email;



    useEffect(() => {
        const getProducts = async () => {
            const url = `http://localhost:5000/userProduct?email=${email}`


            const { data } = await axios.get(url);
            if (!data?.success) return toast.error(data?.error);
            setUserProducts(data?.data);

        }
        getProducts()

    }, [userProducts])




    return (
        <div className="w-full ">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead >
                    <tr>
                        <th className='pl-10'>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th className='pl-7'>Cancle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userProducts.map(product => <MyOdersRow key={product._id} product={product}></MyOdersRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyOrders;