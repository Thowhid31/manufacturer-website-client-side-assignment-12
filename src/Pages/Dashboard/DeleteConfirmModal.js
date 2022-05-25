import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingUser, refetch, setDeletingUser }) => {
    const { email } = deletingUser;


    const handleDeleteUser = (email) => {
        fetch(`https://morning-sea-61188.herokuapp.com/user/${email}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                
                toast.success('User is Deleted');
                setDeletingUser(null)
                refetch();
            }
        })
    }


    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600">Are You Sure To Delete '{email}'</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                    <button onClick={()=>handleDeleteUser(email)} className='btn btn-xs btn-error'>Delete User</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;