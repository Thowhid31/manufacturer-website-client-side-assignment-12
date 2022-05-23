import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';

const PurchasePage = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);
    

    useEffect(()=>{      
            fetch(`http://localhost:5000/product/${productId}`)
            .then(res=> res.json())
            .then(data => setProduct(data))

    },[product, productId])

    return (
        <div>
            <h1>Your Purchase Information: {product.name}</h1>
            <h2>Description: {product.description}</h2>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
        </div>
    );
};

export default PurchasePage;