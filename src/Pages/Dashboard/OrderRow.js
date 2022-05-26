import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({order, index, refetch}) => {
    const {productName
        , quantity, price, _id, email} = order;

    const handleDeleteProduct = _id => {
        fetch(`http://localhost:5000/allorders/${_id}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success('Product Has been Deleted!')
                refetch()
            }
        })
    }


    return (
        <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{productName
}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td><button onClick={()=> handleDeleteProduct(_id)} className='btn btn-xs btn-error'>Delete</button></td>
      </tr>
    );
};

export default OrderRow;