import React, { useState } from 'react';
import JobDetails from './JobDetails';
import App from './App';
import { Outlet, useNavigate } from 'react-router-dom';

const SingleJob = ({data}) => {
    // console.log(data);
    const{id,logo,job_title,remote_or_onsite,company_name,contact_information,salary,job_type,location} = data;
    const {address} = contact_information;
    const navigate = useNavigate();
    const viewBtn = (data) =>{
        navigate("/jobDetails",{state:data})
    }

   
    return (
      
             <div className="card w-full bg-base-100 shadow-2xl text-center pt-5 ">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-xl font-bold">{job_title}</h2>
    <h1 className='text-lg my-3'>{company_name}</h1>
   <div className='flex gap-5 w-full items-center my-5 justify-center'>
   <button className='btn border-success'>{remote_or_onsite}</button>
    <button className='btn border-success'>{job_type}</button>
   </div>
   
    <div className='flex justify-evenly my-5'>
        <div className='flex gap-3'>
            <img src='/public/assets/icons/location2.png'></img>
            <h1>{location}</h1>
        </div>
        <div className='flex'>
        <img src='/public/assets/icons/money.png'></img>
            <h1>{salary}</h1>
        </div>
    </div>

  <div className='w-full flex items-center justify-center'>
  <button onClick={()=> viewBtn(data)} className='  my-5 btn btn-primary w-[30%]'>
   View Details 
   </button>
  </div>
    
  
  
        </div>
            </div>
    );
};

export default SingleJob;