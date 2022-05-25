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






    // const { data: userProducts, isLoading, refetch } = useQuery('user', () => fetch(`http://localhost:5000/userProduct/${email}`, {
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // }).then(res => {
    //     if (res.status === 401 || res.status === 403) {
    //         signOut(auth)
    //         localStorage.removeItem('accessToken');
    //         navigate('/')
    //     }
    //     return res.json()
    // })
    //     .then(data => {
    //         console.log(data);
    //         if (!data?.success) return toast.error(data?.error);
    //     }));

    // if (isLoading) {
    //     return <Loading></Loading>
    // }





    useEffect(() => {
        const getProducts = async () => {

            fetch(`http://localhost:5000/userProduct/${email}`, {
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
            <table className="table w-full">
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
                        userProducts?.length === 0 ? <p className='text-xl text-green-800 font-semibold text-center mt-5'>Please Order Product</p> : userProducts?.map(product => <MyOdersRow key={product._id} product={product} setReload={setReload}></MyOdersRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyOrders;