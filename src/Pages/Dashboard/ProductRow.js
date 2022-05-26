import React from 'react';

const ProductRow = ({product, index}) => {
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
      </tr>
    );
};

export default ProductRow;