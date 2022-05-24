import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
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

    const handleDeleteUser = (email) => {
        fetch(`http://localhost:5000/user/${email}`,{
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                refetch();
                toast.success('User is Deleted')
            }
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td className='text-black'>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs btn-success'>Make Admin</button>}</td>
            <td>{role !== 'admin' && <button onClick={()=>handleDeleteUser(email)} className='btn btn-xs btn-error'>Delete User</button>}</td>

        </tr>
    );
};

export default UserRow;