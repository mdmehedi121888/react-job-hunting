import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AppliedJobDisplay = ({job}) => {
    // console.log(job);
    const {id,company_name,contact_information,educational_requirements,experiences,job_description,job_responsibility,job_title,job_type,location,logo,remote_or_onsite,salary} = job;
  const {phone,email,address} = contact_information;
  const navigate = useNavigate();
  const viewBtn = (job) =>{
    navigate("/jobDetails",{state:job})
}

    return (
       <div className='w-[100%] flex justify-center items-center'>
       
         <div className=' items-center justify-center border-2 rounded my-5 min-h-[40vh] lg:w-[70%] px-5' style={{display:'grid', gridTemplateColumns:'1fr 2fr 1fr'}}>
            <div className=''>
                <img src={logo} alt="" />
            </div>
            <div className='grid'>
                <h1 className='font-bold text-xl mb-3'>{job_title}</h1>
                <h1 className='mb-3'>{company_name}</h1>
                <div className='flex gap-10 mb-3 items-center justify-center'>
                   <button className='btn'>{remote_or_onsite}</button>
                   <button className='btn '>{job_type}</button>
                </div>
                <div className='flex gap-5'>
                <div className='flex gap-3 my-3'>
    <img src="/public/assets/icons/location2.png" alt="" />
    <h1>Address : ${address}</h1>
</div>
<div className='flex gap-3 my-3'>
    <img src="/public/assets/icons/money.png" alt="" />
    <h1>Salary: ${salary}</h1>
</div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
  <button onClick={()=> viewBtn(job)} className='  my-5 btn btn-primary'>
   View Details 
   </button>
  </div>
        </div>
       </div>
    );
};

export default AppliedJobDisplay;