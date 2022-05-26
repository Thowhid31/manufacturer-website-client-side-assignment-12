import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({product, index, refetch}) => {

    const {name, quantity, price, _id} = product;

    const handleDeleteProduct = _id => {
        fetch(`http://localhost:5000/product/${_id}`,{
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
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td><button onClick={()=> handleDeleteProduct(_id)} className='btn btn-xs btn-error'>Delete</button></td>
      </tr>
    );
};

export default ProductRow;