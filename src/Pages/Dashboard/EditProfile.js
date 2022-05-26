import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const EditProfile = () => {


    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)




    const onSubmit = async (data) => {

        const email = user.email;
        const userInfo = {
            education: data.education,
            address: data.address,
            phone: data.phone,
            birthday: data.birth,
            name: user.displayName,
            email: user.email,
        }


        console.log(userInfo);

        try {
            const { data } = await axios.put(`http://localhost:5000/userInfo/${email}`, userInfo, {
                method: 'PUT',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });

            if (!data.success) {
                return toast.error(data.error)
            }
            console.log(data);
            toast.success('SuccessFully Updated');
            reset()

        } catch (error) {
            toast.error(error.message)
        }
    };





    return (

        <div >
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className=' text-xl font-bold text-primary'>Update Profile</h1>
                <hr className='  border-green-600 w-6/12 mb-5' />


                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Education </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Educational Qualification"
                            className="input input-bordered w-full "
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: 'Educational Qualification is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.education?.message}</span>
                            }

                        </label>
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Current Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Current Address"
                            className="input input-bordered w-full "
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.address?.message}</span>
                            }

                        </label>
                    </div>



                    <div className="form-control w-full ">
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
                                    message: 'Phone Number is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.phone?.message}</span>
                            }

                        </label>
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Date Of Birth</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Your Date Of Birth"
                            className="input input-bordered w-full "
                            {...register("birth", {
                                required: {
                                    value: true,
                                    message: 'Date Of Birth is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.birth?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.birth?.message}</span>
                            }

                        </label>
                    </div>
                </div>


                <div className="w-full text-center mt-7">
                    <button className='py-[2px] px-4 border border-green-800  text-green-800 text-sm rounded '>Update</button>

                </div>

            </form>
        </div>
    );
};

export default EditProfile;