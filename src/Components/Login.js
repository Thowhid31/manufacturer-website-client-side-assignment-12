import React from 'react';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    if (user) {
        console.log(user);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="Your Email" class="input input-bordered w-full text-black max-w-xs"
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
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input type="password" placeholder="Your Password" class="input input-bordered w-full text-black max-w-xs"
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

                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input className="btn btn-outline btn-accent font-bold w-full max-w-xs" value='login' type="submit" />
                    </form>

                    
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