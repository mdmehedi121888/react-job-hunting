import React from 'react';

const Header = () => {
    return (
        <div className='flex gap-5 shadow-2xl my-2'>
            <div className='w-[50%]  flex items-center justify-center text-center'>
                <div className='items-center justify-center mx-auto'>
                <h1 className='text-3xl font-bold mb-5'>One Step Closer To Your <span className='text-blue-500	'>Dream Job</span></h1>
                <p className='text-lg mb-5  lg:mx-20'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn btn-primary'>Get Started</button>
                </div>
            </div>
            <div className='w-[50%]'>
                <img src='../public/assets/images/user.png'></img>
            </div>
        </div>
    );
};

export default Header;