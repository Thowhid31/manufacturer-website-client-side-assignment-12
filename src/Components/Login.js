import React, { useEffect } from 'react';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from './Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    let signInErrorMessage;

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [token] = useToken(user || gUser)

    useEffect(()=>{
        if (token) {
            navigate (from, {replace: true})
        }
    },[token, from, navigate])

    

    if (error || gError){
        signInErrorMessage= <p className='text-yellow-300'><small>{error?.message || gError.message}</small></p>
    }

    if(loading || gLoading){
       return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>


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
                        <input className="btn btn-outline btn-accent font-bold w-full max-w-xs" value='login' type="submit" />
                    </form>
                    <p className='text-center'><small>New to Our Site? <Link className='text-secondary' to='/signup'>Create New Account</Link></small></p>

                    
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-secondary font-bold">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;