import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
// import purchaseBG from '../../Assets/images/purchase-2.jpg'




const MyProfile = ({ refetch }) => {


    

    const { email } = useParams();
    const [setUserUpdate] = useState({});
    const [user] = useAuthState(auth);



    const handleProfile = event => {
        event.preventDefault()
        const profile = {
            email: user.email,
            education: event.target.education.value,
            phone: event.target.phone.value,
            address: event.target.address.value
        }

        fetch(`https://morning-sea-61188.herokuapp.com/user/update/${email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    setUserUpdate(null)
                    toast.success('Your Info Updated')
                }
            })
    }

    return (
        <div className='rounded h-full'>
            <div>
                <div className='text-black text-center m-5'>
                    <h1 className='p-5 text-3xl font-bold uppercase'>My Profile</h1>
                </div>
                <div>
                    <div class="hero bg-base-200 flex justify-center items-center">
                        <div class="hero-content flex-col lg:flex-row">

                            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div class="card-body flex-1">
                                    <form onSubmit={handleProfile} className='w-full text-xl text-black form-control'>
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">Name</span>
                                        </label>
                                        <input type="text" readOnly value={user.displayName} className="input input-bordered w-full input-sm max-w-xs" />

                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">Email</span>
                                        </label>
                                        <input type="email" readOnly value={user.email} className="input input-bordered w-full input-sm max-w-xs" />

                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">Education</span>
                                        </label>
                                        <input type="text" name='education' className="input input-bordered w-full input-sm max-w-xs" required />

                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">Address</span>
                                        </label>
                                        <input type="text" name='address' className="input input-bordered w-full input-sm max-w-xs" required />

                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">Phone</span>
                                        </label>
                                        <input type="number" name='phone' className="input input-bordered w-full input-sm max-w-xs mb-4" required />
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">LinkedIn Link</span>
                                        </label>
                                        <input type="text" name='LinkedIn' className="input input-bordered w-full input-sm max-w-xs mb-4" required />

                                        <br />

                                        <div>
                                            <input type="submit" value="Update Profile" className="btn btn-accent uppercase w-48" />
                                        </div>


                                    </form>
                                    
                                </div>
                            </div>
                            <div class="flex-1 text-center lg:text-left p-5">
                                <h1 class="text-5xl font-bold">Update Your Profile Info</h1>
                                <p class="py-6">If you want you can Edit your Info like, address, educational qualification and phone number also.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;