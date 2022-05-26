import React from 'react';
import { toast } from 'react-toastify';

const ModalForProductDelete = ({deleteProduct, refetch, setDeleteProduct}) => {

    const {_id} = deleteProduct;

    const handleDeleteProduct = () => {
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
                setDeleteProduct(null)
                refetch()
            }
        })
    }


    const {name} = deleteProduct;

    return (
        <div>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are You Want to Delete? {name}</h3>
                    <p class="py-4">You can't recycle it again, Mind It!</p>
                    <div class="modal-action">
                    <button onClick={()=> handleDeleteProduct(_id)} className='btn btn-xs btn-error'>Delete</button>
                        <label for="my-modal-6" class="btn btn-xs btn-success">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ModalForProductDelete;