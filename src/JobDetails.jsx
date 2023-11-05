import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb } from '/public/localdb.js';



const JobDetails = () => {

  const locationDefault = useLocation();

  const {id,company_name,contact_information,educational_requirements,experiences,job_description,job_responsibility,job_title,job_type,location,logo,remote_or_onsite,salary} = locationDefault.state;
  const {phone,email,address} = contact_information;

  const notify = (id) => {
    toast("Successfully apply !!");
    addToDb(id);
  }


    return (
        
    <div className='grid'>
        <h1 className='text-4xl font-bold text-center'>Job Details</h1>
         <div className='w-full flex justify-center items-center'>
         <div className='flex mx-10 lg:w-[70%] min-h-[64vh] gap-10'>

{/* left side */}
<div className='w-[60%] mt-32 '>

{/* job description */}
<div className='flex items-center gap-5'><h1 className='text-2xl my-5 font-semibold'>Job Description: </h1>
<p><small>{job_description}</small></p></div>

 {/* job responsibility */}
 <div className='flex items-center gap-5'><h1 className='text-lg font-semibold'>Job Resposibility: </h1>
<p><small>{job_responsibility}</small></p></div>

 {/* educational requirements */}
 <div className='my-5'><h1 className='text-lg my-3 font-semibold'>Educational Requirements:  </h1>
<p>{educational_requirements}</p></div>


{/* experiences */}
<div className=''><h1 className='text-lg font-semibold'>Experiences :  </h1>
<p>{experiences}</p></div>

</div>


{/* right side */}
<div className='w-[35%] mt-28 shadow-2xl my-5 px-5 py-5 gap-3 min-h-[50vh] text-lg'>
<h1 className='text-2xl font-semibold my-3'>Job Details</h1>
<hr />

{/* salary  */}
<div className='flex gap-3 my-3'>
    <img src="/public/assets/icons/money.png" alt="" />
    <h1>Salary: ${salary}</h1>
</div>


{/* job title  */}
<div className='flex gap-3 my-3'>
    <img src="/public/assets/icons/calendar.png" alt="" />
    <h1>Job Title : ${job_title}</h1>
</div>


<h1 className='text-2xl my-5 font-semibold'>Contact Information</h1>
<hr />

 {/* phone  */}
 <div className='flex gap-3 my-3'>
    <img src="/public/assets/icons/phone.png" alt="" />
    <h1>Phone: {phone}</h1>
</div>

 {/* email  */}
 <div className='flex gap-3 my-3'>
    <img src="/public/assets/icons/email.png" alt="" />
    <h1>Email: ${email}</h1>
</div>

 {/* address  */}
 <div className='flex gap-3 my-3'>
    <img src="/public/assets/icons/location2.png" alt="" />
    <h1>Address : ${address}</h1>
</div>

    {/* button  */}
    <div className='w-full flex justify-center items-center'>
    <button onClick={()=>notify(id)} className='btn btn-primary my-5'>Apply Now</button>
    </div>

</div>

</div>
<ToastContainer />

    </div> 
    </div> 
    
    );
};

export default JobDetails;