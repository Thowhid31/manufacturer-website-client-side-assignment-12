import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageStorage_key = 'a5113089964d5e5d5c59a49191f9efa6';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',  image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorage_key}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then (result => {
            console.log('imgbb', result);
        })
    }


  

    return (
        <div>
            <h1>Add A product to Website's Home</h1>
            <form className='h-screen' onSubmit={handleSubmit(onSubmit)}>


                
                   

                   
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
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
                        {errors.name?.type === 'required' && <span className="label-text-alt text-yellow-300">{errors.name.message}</span>}
                    </label>
                </div>



                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Price Per Piece</span>
                    </label>
                    <input type="number" placeholder="Product Price Per Piece" className="input input-bordered w-full text-black max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Product is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.number?.type === 'required' && <span className="label-text-alt text-yellow-300">{errors.number.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Quantity</span>
                    </label>
                    <input type="number" placeholder="Product Quantity" className="input input-bordered w-full text-black max-w-xs"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Product Quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.number?.type === 'required' && <span className="label-text-alt text-yellow-300">{errors.number.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input type="number" placeholder="Minimum order quantity" className="input input-bordered w-full text-black max-w-xs"
                        {...register("minimum", {
                            required: {
                                value: true,
                                message: 'Minimum order quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.number?.type === 'required' && <span className="label-text-alt text-yellow-300">{errors.number.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Describe Your Product" className="input input-bordered w-full text-black max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-yellow-300">{errors.name.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
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
                        {errors.name?.type === 'required' && <span className="label-text-alt text-yellow-300">{errors.name.message}</span>}
                    </label>
                </div>

               
                
                




                <input className="btn btn-outline btn-accent font-bold w-full max-w-xs mt-3" value='ADD Product' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;