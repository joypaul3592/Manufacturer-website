import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import Loading from '../../Sheard/Loading';

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)

    // Load data form DB
    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:5000/productDtails/${id}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if (!data?.success) return toast.error(data?.error);
            setProduct(data?.data);
        }
        fetchData()
    }, [product])



    // Post data 







    const onSubmit = async (data) => {
        console.log(data)
        const productStock = parseInt(product.stock);
        console.log(productStock);


        const quantity = parseInt(data.quantity);
        console.log(quantity);

        const miniQuantity = parseInt(product.miniQuantity);
        console.log(miniQuantity);

        const id = product._id;


        if (quantity < productStock) {


            if (quantity > miniQuantity) {


                console.log('kja to korara kotha');
                const productDetail = {
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    stock: product.stock,
                    dec: product.dec,
                    email: user.email,
                    quantity: data.quantity,
                    address: data.address,
                    phone: data.phone,
                }
                const currentQuantity = (parseInt(product.stock) - parseInt(data.quantity))
                const stock = {
                    stock: currentQuantity
                }

                try {
                    const { data } = await axios.post(`http://localhost:5000/orders`, productDetail, {
                        method: 'POST',
                        headers: {
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    });

                    const { updateData } = await axios.put(`http://localhost:5000/updateProduct/${id}`, stock, {
                        method: 'PUT',
                        headers: {
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    });
                    console.log(updateData);
                    if (!data.success) {
                        return toast.error(data.error)
                    }
                    console.log(data);

                    toast.success(data.message);
                    reset()

                } catch (error) {
                    toast.error(error.message)
                };

                reset()
                return

            } else {
                toast.error(`Please Oder Minimum ${product.miniQuantity}`)
                reset()
                return
            }

        } else {
            toast.error('Available Stock Is Low')
            reset()
            return
        }




    };


    if (!product) {
        return <Loading></Loading>
    }



    return (


        <div className=' max-w-7xl mx-auto px-8'>

            <div class="flex flex-col w-full lg:flex-row my-12 ">
                <div class="flex-1 card  rounded-box place-items-center">
                    <div >
                        <div className="card mb-8  shadow-xl">
                            <figure><img className=' h-96 w-full' src={product.image} alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <div className="flex justify-center ">
                                    <h2 className="card-title  text-2xl text-primary ">
                                        {product.name}
                                    </h2>
                                </div>
                                <hr className=' border-green-700 ' />
                                <h2 className="card-title text-lg text-gray-600 mt-2">
                                    Price:  ${product.price}
                                </h2>

                                <p className=' text-xs text-left text-gray-600'>{product.dec}</p>
                                <div className="w-full flex justify-between mt-6">
                                    <p className=' text-sm font-semibold '>Available Stock : <span className=' text-green-700'>{product.stock}</span></p>
                                    <p className=' text-sm font-semibold '>Minimum Order: <span className=' text-green-700'>{product.miniQuantity}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divider lg:divider-horizontal">OR</div>
                <div class="flex-1 card ">

                    <div className="px-16">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control w-full mb-3">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" value={user.displayName} disabled class="input input-bordered w-full " />
                            </div>



                            <div class="form-control w-full mb-3 ">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" value={user.email} disabled class="input input-bordered w-full" />
                            </div>


                            <div className="form-control w-full mb-3 ">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Address"
                                    className="input input-bordered w-full "
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is required'
                                        }
                                    })}
                                />
                                <label className="label ">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.address?.message}</span>
                                    }

                                </label>
                            </div>


                            <div className="form-control w-full mb-3 ">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Your Phone Number"
                                    className="input input-bordered w-full "
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone number is required'
                                        }
                                    })}
                                />
                                <label className="label ">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.phone?.message}</span>
                                    }

                                </label>
                            </div>


                            <div className="form-control w-full mb-3 ">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Your Product Quantity"
                                    className="input input-bordered w-full "
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Product Quantity is required'
                                        }
                                    })}
                                />
                                <label className="label ">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.quantity?.message}</span>
                                    }
                                </label>
                            </div>


                            <div className='text-center'>
                                <input className='btn btn-primary text-white  max-w-xs w-full ' type="submit" value='Add Product' />
                            </div>



                        </form>

                    </div>




                </div>
            </div>
        </div>







    );
};

export default ProductDetail;