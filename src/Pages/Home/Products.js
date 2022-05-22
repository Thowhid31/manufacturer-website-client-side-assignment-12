import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {



    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='my-20'>
            <div className='text-center'> 
            <h1 className='text-primary text-xl font-bold uppercase'>Our Products</h1>
            <h2 className='text-5xl'>Products We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 px-12'>
                {
                    products.map(product => <Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;