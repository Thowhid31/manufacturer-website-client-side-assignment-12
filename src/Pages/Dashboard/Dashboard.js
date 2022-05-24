import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content px-12 mt-5">
         <h1 className='text-3xl font-bold text-red-600'>Your Dashboard</h1>
         <Outlet></Outlet>
          
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay "></label> 
          <ul class="menu p-4 overflow-y-auto w-80 text-base-content uppercase bg-black">
           
            { !admin && <li><NavLink className='mt-2 font-black' to="/dashboard">My Orders</NavLink></li>}
            {!admin && <li><NavLink className='mt-2 font-black text-yellow-300' to="/dashboard/review">My Reviews</NavLink></li>}
            <li><NavLink className='mt-2 font-black text-yellow-300' to="/dashboard/profile">My Profile</NavLink></li>
            {admin && <li><NavLink className='mt-2 font-black text-yellow-300' to="/dashboard/manage-orders">Manage Orders</NavLink></li>}
            {admin && <li><NavLink className='mt-2 font-black text-yellow-300' to="/dashboard/users">All Users</NavLink></li>}
            {admin && <li><NavLink className='mt-2 font-black text-yellow-300' to="/dashboard/manage-products">Manage Products</NavLink></li>}
            {admin && <li><NavLink className='mt-2 font-black text-yellow-300' to="/dashboard/add-product">Add a Product</NavLink></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;