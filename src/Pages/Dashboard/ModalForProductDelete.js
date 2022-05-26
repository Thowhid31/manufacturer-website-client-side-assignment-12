import React from 'react';
import { toast } from 'react-toastify';

const ModalForProductDelete = ({deleteProduct, refetch, setDeleteProduct}) => {

    const {_id} = deleteProduct;

    const handleDeleteProduct = () => {
        fetch(`https://morning-sea-61188.herokuapp.com/product/${_id}`,{
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
                setDeleteProduct(null)
                refetch()
            }
        })
    }


    const {name} = deleteProduct;

    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are You Want to Delete? {name}</h3>
                    <p className="py-4">You can't recycle it again, Mind It!</p>
                    <div className="modal-action">
                    <button onClick={()=> handleDeleteProduct(_id)} className='btn btn-xs btn-error'>Delete</button>
                        <label htmlFor="my-modal-6" className="btn btn-xs btn-success">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ModalForProductDelete;