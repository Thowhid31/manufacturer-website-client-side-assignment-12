import React from 'react';

const UserRow = ({user}) => {
    const {email} = user
    return (
        <tr>
            <th>1</th>
            <td className='text-black'>{email}</td>
            <td><button className='btn btn-xs'>Make Admin</button></td>
            <td><button className='btn btn-xs'>Delete User</button></td>
            
        </tr>
    );
};

export default UserRow;