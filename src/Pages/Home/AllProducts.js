import React from 'react';
import purchaseBG from '../../Assets/images/purchase-2.jpg'
import Footer from './Footer';
import ForAllProducts from './ForAllProducts';


const AllProducts = () => {
    return (
        <div>
            <div>
                <div className='pt-24 pb-24' style={{
                    background: `url(${purchaseBG})`,
                    backgroundSize: 'cover'
                }}>
                   
                    <ForAllProducts></ForAllProducts>

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AllProducts;