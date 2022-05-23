import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content px-12 mt-5">
         <h1 className='text-3xl font-bold text-red-600'>Your Dashboard</h1>
         <Outlet></Outlet>
          
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
           
            <li><NavLink className='mt-2 font-black' to="/dashboard">My Orders</NavLink></li>
            <li><NavLink className='mt-2 font-black text-yellow-300' to="/dashboard/review">My Reviews</NavLink></li>
            <li><NavLink className='mt-2 font-black text-yellow-300' to="/dashboard/profile">My Profile</NavLink></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;