import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import MyOdersRow from './MyOdersRow';

const MyOrders = () => {

    const [userProducts, setUserProducts] = useState([]);
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const email = user?.email;
    const [reload, setReload] = useState(false)



    useEffect(() => {
        const getProducts = async () => {

            fetch(`https://vast-headland-56370.herokuapp.com/userProduct/${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    setReload(!true)
                    if (!data?.success) return toast.error(data?.error);
                    setUserProducts(data?.data);
                })
        }
        getProducts()

    }, [user, reload])

    console.log(userProducts);


    return (
        <div className="w-full ">
            <h1 className=' text-3xl font-semibold text-primary ml-7 uppercase'>My Orders</h1>
            <hr className='h-[1px] w-5/12 border-green-500 mt-3  ml-7' />
            <table className="table w-full mt-12 ">
                <thead >
                    <tr>
                        <th className='pl-10'>Name</th>
                        <th>Price/pes</th>
                        <th>Order Quantity</th>
                        <th>Total price</th>
                        <th>Status</th>
                        <th className='pl-7'>Cancle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userProducts?.length === 0 ? <p className='text-xl text-green-800 font-semibold text-center mt-5'>Please Order Product</p> : userProducts?.map(product => <MyOdersRow key={product._id} product={product} setReload={setReload}></MyOdersRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyOrders;