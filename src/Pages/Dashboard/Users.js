import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import MyProfile from './MyProfile';
import UserRow from './UserRow';

const Users = () => {

    const [deletingUser, setDeletingUser] = useState(null);
    const [updateUser, setUpdateUser]= useState(null)

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://morning-sea-61188.herokuapp.com/user', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
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
                            users.map((user, index) => <UserRow
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                                setDeletingUser={setDeletingUser}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingUser && <DeleteConfirmModal
                deletingUser={deletingUser}
                refetch={refetch}
                setDeletingUser={setDeletingUser}
            ></DeleteConfirmModal>}

            <div>
                {
                    updateUser && <MyProfile
                    updateUser={updateUser}
                    refetch={refetch}
                    setUpdateUser={setUpdateUser}
                    ></MyProfile>
                }
            </div>
        </div>
    );
};

export default Users;