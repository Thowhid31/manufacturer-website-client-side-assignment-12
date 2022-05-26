import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import ProductRow from './ProductRow';

const ManageProducts = () => {

    const { data: products, isLoading } = useQuery('products', () => fetch('http://localhost:5000/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-2xl text-black'>Your Total Manage Products: {products.length}</h1>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        {
                            products.map((product, index)=><ProductRow
                            key={product._key}
                            product={product}
                            index={index}
                            ></ProductRow>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;