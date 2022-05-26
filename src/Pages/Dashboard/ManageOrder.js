// import React from 'react';
// import { useQuery } from 'react-query';
// import Loading from '../../Components/Loading';


// const ManageOrder = () => {

//     const {data: _id, isLoading} = useQuery('orders', ()=> fetch(`http://localhost:5000/orders/${_id}`,{
//         headers: {
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`
//         }
//     }).then(res=> res.json()));

//     if(isLoading){
//         return <Loading></Loading>
//     }
    

//     return (
//         <div>
//             <h1>Your All Orders: {_id.length}</h1>
//         </div>
//     );
// };

// export default ManageOrder;


import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import ModalForOrderDelete from './ModalForOrderDelete';
import OrderRow from './OrderRow';

const ManageOrder = () => {


   

    const { data: order, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/allorders`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-2xl text-black'>Your Total Manage Products: {order.length}</h1>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>User Email</th>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Price</th>
                                <th>Paid/Unpaid</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        {
                            order.map((order, index)=><OrderRow
                            key={order._key}
                            order={order}
                            refetch={refetch}
                            index={index}   
                            ></OrderRow>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;