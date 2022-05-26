import React from 'react';


const ProductRow = ({product, index, refetch, setDeleteProduct}) => {

    const {name, quantity, price} = product;

    


    return (
        <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>
        <label onClick={()=>setDeleteProduct(product)} htmlFor="my-modal-6" className="btn btn-xs btn-error">Delete</label>
            </td>
      </tr>
    );
};

export default ProductRow;