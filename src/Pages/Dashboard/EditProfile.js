import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../Firebase/Firebase.init';

const EditProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = async (data) => {
        console.log(data)
        const displayName = data.name;
        const photoURL = data.image;
        console.log(displayName, photoURL);
        // await updateProfile({ displayName, photoURL });
    };





    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className=' text-xl font-bold text-primary'>Update Profile</h1>
                <hr className='  border-green-600 w-6/12 mb-5' />


                <div className="grid grid-cols-2 gap-5">
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
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>
                            }

                        </label>
                    </div>


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
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>
                            }

                        </label>
                    </div>



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
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>
                            }

                        </label>
                    </div>


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
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>
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