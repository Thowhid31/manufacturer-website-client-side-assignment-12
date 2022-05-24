import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import purchaseBG from '../../Assets/images/purchase-2.jpg'

const MyProfile = () => {

    const [user] = useAuthState(auth)

    return (
        <div className='px-12 h-screen rounded-xl' style={{
            backgroundColor: '#B8F1B0'
        }}>
            <div>
                <div className='text-black text-center m-5'>
                    <h1 className='p-5 text-3xl font-bold uppercase'>My Profile</h1>
                </div>
                <div>
                    <div class="hero min-h-screen bg-base-200 flex justify-center items-center">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <div class="flex-1 text-center lg:text-left">
                                <h1 class="text-5xl font-bold">Update Your Profile Info</h1>
                                <p class="py-6">If you want you can Edit your Info like, address, educational qualification and phone number also.</p>
                            </div>
                            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div class="card-body flex-1">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Name</span>
                                        </label>
                                        <input value={user?.displayName} class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input value={user?.email} placeholder="password" class="input input-bordered" />
                                    
                                    </div>
                                    <div class="form-control mt-6">
                                        <button class="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;