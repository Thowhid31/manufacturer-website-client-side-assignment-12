import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import ModalForProductDelete from './ModalForProductDelete';
import ProductRow from './ProductRow';

const ManageProducts = () => {

    const [deleteProduct, setDeleteProduct] = useState(null)

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://morning-sea-61188.herokuapp.com/product', {
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
                <div className="overflow-x-auto">
                    <table className="table w-full">

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
                            refetch={refetch}
                            index={index}
                            setDeleteProduct={setDeleteProduct}
                            ></ProductRow>)
                        }
                    </table>
                </div>
            </div>
                        {deleteProduct && <ModalForProductDelete
                        deleteProduct={deleteProduct}
                        refetch={refetch}
                        setDeleteProduct={setDeleteProduct}
                        ></ModalForProductDelete>}
        </div>
    );
};

export default ManageProducts;