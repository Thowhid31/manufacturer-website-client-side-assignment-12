import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../Hooks/useToken';
import Loading from './Loading';

const SignUp = () => {


    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updateError] = useUpdateProfile(auth);

      const navigate = useNavigate()

      const [token] = useToken(user || gUser)

    if (token) {
        navigate('/product');
        
    }

    let signInErrorMessage;

    if (error || gError || updateError){
        signInErrorMessage= <p className='text-yellow-300'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if(loading || gLoading || updateError){
       return <Loading></Loading>
    }

    const onSubmit = async data => {
        // console.log(data);
        createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('updated');
        
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full text-black max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-yellow-300">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full text-black max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-yellow-300">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-yellow-300">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input type="password" placeholder="Your Password" className="input input-bordered w-full text-black max-w-xs"
                                {...register("password",

                                    {
                                        
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                            value: 6,
                                            message: 'Must be 6 character or longer'
                                        }
                                    }

                                )}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-yellow-300">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-yellow-300">{errors.password.message}</span>}
                            </label>
                        </div>

                                    {signInErrorMessage}
                        <input className="btn btn-outline btn-accent font-bold w-full max-w-xs" value='SignUp' type="submit" />
                    </form>
                    <p className='text-center'><small>Already have an Account? <Link className='text-secondary' to='/login'>Please Login.</Link></small></p>

                    
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-secondary font-bold">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;