import React from 'react';

const Footer = () => {
    return (
       <div className='bg-black text-white grid items-center justify-center'>
         <div className='grid grid-cols-2 lg:grid-cols-5 lg:mx-10 text-white py-10'>
            {/* bdjobs */}
            <div>
                <h1 className='font-bold text-2xl'>BD Jobs</h1>
                <p>Job hunting website</p>
                <img src="/assets/icons/social.png" alt="" />
            </div>

            {/* company */}
            <div>
            <h1 className='font-bold text-2xl'>Company</h1>
            <h2 className='text-lg'>About Us</h2>
            <h2 className='text-lg'>Work</h2>
            <h2 className='text-lg'>Latest News</h2>
            <h2 className='text-lg'>Carrers</h2>
            </div>

            {/* product */}
            <div>
            <h1 className='font-bold text-2xl'>Product</h1>
            <h2 className='text-lg'>Prototype</h2>
            <h2 className='text-lg'>Plans & Pricing</h2>
            <h2 className='text-lg'>Customers</h2>
            <h2 className='text-lg'>Integrations</h2>
            </div>

            {/* support */}
            <div>
            <h1 className='font-bold text-2xl'>Support</h1>
            <h2 className='text-lg'>Help Desk</h2>
            <h2 className='text-lg'>Sales</h2>
            <h2 className='text-lg'>Become a Partner</h2>
            <h2 className='text-lg'>Developers</h2>
            </div>

            {/* contact */}
            <div>
            <h1 className='font-bold text-2xl'>Contact</h1>
            <h2 className='text-lg'>Shafipur, Gazipur</h2>
            <h2 className='text-lg'>+8801871497433</h2>
            <h2 className='text-lg'>mdmehedi121888@gmail.com</h2>
            </div>
        </div>
        <div className='flex justify-between w-[80%] text-gray-600'>
            <h1>@2023 CareerHub. All Rights Reserved</h1>
            <h1>Powered by CareerHub</h1>
        </div>
       </div>
    );
};

export default Footer;