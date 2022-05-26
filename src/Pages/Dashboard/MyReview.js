import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyReview = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorage_key = 'a5113089964d5e5d5c59a49191f9efa6';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorage_key}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const review = {
                        name: data.name,
                        location: data.location,
                        review: data.review,
                        ratings: data.ratings,
                        image: image
                    }
                    //sent to my db

                    fetch(`https://morning-sea-61188.herokuapp.com/review`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if(inserted.insertedId){
                                toast.success('Your Review is added')
                                reset();
                             
                            }
                            else{
                                toast.error('Failed to add.')
                            }
                        })
                }

                console.log('imgbb', result);
            })
    }


    return (
        <div className='flex h-full justify-center items-center'>
            <div>
            <h1 className='text-center text-2xl uppercase font-bold mt-12 mb-10'>Add A product to Website's Home</h1>
            <form className='shadow-xl bg-slate-300 p-5' onSubmit={handleSubmit(onSubmit)}>


                <div className="form-control w-full max-w-x">
                    <label className="label">
                        <span className="label-text text-black">Name</span>
                    </label>
                    <input type="text" placeholder="Product Name" className="input input-bordered w-full text-black max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-x">
                    <label className="label">
                        <span className="label-text text-black">Ratings</span>
                    </label>
                    <input type="number" placeholder="Give Ratings Around 1 to 5" className="input input-bordered w-full text-black max-w-xs"
                        {...register("ratings", {
                            required: {
                                value: true,
                                message: 'Ratings is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.number?.type === 'required' && <span className="label-text-alt text-red-600">{errors.number.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-x">
                    <label className="label">
                        <span className="label-text text-black">Location</span>
                    </label>
                    <input type="text" placeholder="Product Name" className="input input-bordered w-full text-black max-w-xs"
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'Location is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                    </label>
                </div>



                


                

               


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">Reviews Description</span>
                    </label>
                    <input type="text" placeholder="Describe Your Product" className="input input-bordered w-full text-black max-w-xs"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">Photo</span>
                    </label>
                    <input type="file" className="input input-bordered w-full text-black max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                    </label>
                </div>








                <input className="btn btn-outline btn-accent font-bold w-full max-w-xs mt-3" value='ADD Product' type="submit" />
            </form>
            </div>
        </div>
    );
};

export default MyReview;