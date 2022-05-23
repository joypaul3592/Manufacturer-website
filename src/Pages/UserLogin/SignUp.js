import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import useToken from '../../Hook/useToken';
import Loading from '../../Sheard/Loading';


const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    useEffect(() => {
        if (token) {
            toast.success('Successfully SignUp');
            navigate(from, { replace: true });
        }
    }, [token])






    if (gLoading || loading || updating) {
        return <Loading></Loading>
    }


    if (gError || error || updateError) {
        signInError = <p className=' text-red-500 text-xs'>{error?.message || gError?.message || updateError?.message}</p>
    }



    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        const displayName = data.name;
        const photoURL = data.image;
        // console.log(displayName, photoURL);
        await updateProfile({ displayName, photoURL });
    };

    // console.log(user);


    return (
        <div className='flex  justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
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





                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^(.+)@(.+)$/,
                                        message: 'Provied a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>
                                }
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>
                                }
                            </label>
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
                                }
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>
                                }
                            </label>
                        </div>




                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Your Image"
                                className="input input-bordered w-full max-w-xs"
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




                        <input className='btn w-full max-w-xs' type="submit" value='SignUp' />

                        {signInError}

                    </form>


                    <p className=' text-sm text-center'>Alrady have an account?<Link to='/login' className=' text-primary'> Please Login</Link></p>


                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Contineu with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;