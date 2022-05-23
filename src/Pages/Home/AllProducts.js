import React from 'react';
import Products from './Products';
import purchaseBG from '../../Assets/images/purchase-2.jpg'
import Footer from './Footer';


const AllProducts = () => {
    return (
        <div>
            <div>
                <div className='pt-24 pb-24' style={{
                    background: `url(${purchaseBG})`,
                    backgroundSize: 'cover'
                }}>
                    <Products></Products>

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AllProducts;