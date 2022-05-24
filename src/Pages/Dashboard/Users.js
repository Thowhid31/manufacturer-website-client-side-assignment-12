import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import UserRow from './UserRow';

const Users = () => {

    const {data: users, isLoading} = useQuery('users', ()=> fetch('http://localhost:5000/user').then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl'>All Users Here: {users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Make Admin</th>
        <th>Delete Admin</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map(user=> <UserRow
            key={user._id}
            user={user}
            ></UserRow>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;