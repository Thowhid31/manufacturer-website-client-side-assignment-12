import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch, setDeletingUser }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`https://morning-sea-61188.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => { 
                if(res.status ===403){
                    toast.error('Failed to Make an Admin')
                }
                return res.json() })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('You add an user as an Admin')
                }
            })
    }

    

    return (
        <tr>
            <th>{index + 1}</th>
            <td className='text-black'>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs btn-success'>Make Admin</button>}</td>
            {/* <td>{role !== 'admin' && <button onClick={()=>handleDeleteUser(email)} className='btn btn-xs btn-error'>Delete User</button>}</td> */}
            <td><label onClick={()=>setDeletingUser(user)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label></td>

        </tr>
    );
};

export default UserRow;