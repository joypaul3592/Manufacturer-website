import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {







    const { register, formState: { errors }, handleSubmit, reset } = useForm();



    // useEffect(() => {
    //     if (user) {
    //         navigate(from, { replace: true });
    //     }
    // }, [user])




    // if (gLoading || loading) {
    //     return <Loading></Loading>
    // }





    const onSubmit = async (data) => {
        console.log(data)
        const product = {
            name: data.name,
            price: data.price,
            image: data.image,
            stock: data.stock,
            dec: data.dec,
        }
        console.log(product);
        try {
            const { data } = await axios.post(`http://localhost:5000/product`, product);


            if (!data.success) {
                return toast.error(data.error)
            }
            console.log(data);
            toast.success(data.message);
            reset()

        } catch (error) {
            toast.error(error.message)
        }
    };



    return (
        <div className='w-full'>
            <h1 className=' text-3xl font-semibold text-primary text-center mt-8'>Add Product</h1>
            <hr className='h-[1px] w-5/12 border-green-500 mt-3  mx-auto' />


            <div className="card-body flex w-full  ">

                <form onSubmit={handleSubmit(onSubmit)} className='w-10/12 mx-auto'>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full "
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'name is required'
                                }
                            })}
                        />
                        <label className="label ">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>
                            }

                        </label>
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="Number"
                            placeholder="Your Product Price"
                            className="input input-bordered w-full "
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.price?.message}</span>
                            }

                        </label>
                    </div>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Stock</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Your Products Stock"
                            className="input input-bordered w-full "
                            {...register("stock", {
                                required: {
                                    value: true,
                                    message: 'Stock is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.stock?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.stock?.message}</span>
                            }

                        </label>
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            type="url"
                            placeholder="Your Product Image"
                            className="input input-bordered w-full "
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.image?.message}</span>
                            }

                        </label>
                    </div>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Decription</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Your Product Decription"
                            className="input input-bordered w-full textarea h-40"
                            {...register("dec", {
                                required: {
                                    value: true,
                                    message: 'Decription is required'
                                }
                            })}
                        ></textarea>
                        <label className="label">
                            {errors.dec?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.dec?.message}</span>
                            }

                        </label>
                    </div>



                    <div className='text-center'>
                        <input className='btn btn-primary text-white  max-w-xs w-full ' type="submit" value='Add Product' />

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;