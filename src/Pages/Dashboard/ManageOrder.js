import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';


const ManageOrder = () => {

    const {data: orders, isLoading} = useQuery('orders', ()=> fetch('http://localhost:5000/orders',{
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=> res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    

    return (
        <div>
            <h1>Your All Orders: {orders.length}</h1>
        </div>
    );
};

export default ManageOrder;