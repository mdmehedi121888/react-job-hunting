import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
             <div className='bg-slate-100 py-5 text-xl'>
         <div className='flex justify-between lg:mx-20 '>
            <NavLink to='/' className='font-bold'>BDJobs</NavLink>
            <div className='flex gap-7'>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/appliedJobs'>Applied Jobs</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </div>
       </div>
        
    );
};

export default Navbar;