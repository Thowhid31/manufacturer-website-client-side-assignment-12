import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingUser, refetch, setDeletingUser, cancelingOrder }) => {
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
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are You Sure To Delete '{email}'</h3>
                    <p className="py-4">Mind it, it goes to permanent DELETE!</p>
                    <div className="modal-action">
                    <button onClick={()=>handleDeleteUser(email)} className='btn btn-xs btn-error'>Delete User</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;