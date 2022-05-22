import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchasePage = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({})
    

    useEffect(()=>{      
            fetch(`http://localhost:5000/product/${productId}`)
            .then(res=> res.json())
            .then(data => setProduct(data))

    },[product, productId])

    return (
        <div>
            <h1>Your Purchase Information: {product.name}</h1>
            <h2>Description: {product.description}</h2>
        </div>
    );
};

export default PurchasePage;