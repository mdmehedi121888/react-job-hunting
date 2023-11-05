import React, { useState } from 'react';
import { getStoredCart } from '/public/data/localdb';
import { useLoaderData } from 'react-router-dom';
import AppliedJobDisplay from './AppliedJobDisplay';

const AppliedJobs = () => {
    const products = getStoredCart();
    const jobs = useLoaderData();
    
    const [remote,setRemote]=useState(false);
    const [onsite,setOnsite]=useState(false);

    const remoteBtn = () =>{
        setRemote(true);
        setOnsite(false);
    }
    const onsiteBtn = () =>{
        setRemote(false);
        setOnsite(true);
    }
    const allBtn = () =>{
        setRemote(false);
        setOnsite(false);
    }

    return (
        <div className='min-h-[68vh] text-center'>
            <h1 className='text-4xl font-bold text-center'>Applied Jobs</h1>

            <details className="dropdown my-10 ">
  <summary className="m-1 btn font-bold text-xl">Filter</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button onClick={remoteBtn}>REMOTE</button></li>
    <li><button onClick={onsiteBtn}>ONSITE</button></li>
    <li><button onClick={allBtn}>ALL</button></li>

  </ul>
</details>
            
            {
                
               !remote && !onsite && (jobs.map(job => products[job.id]?<AppliedJobDisplay key={job.id} job={job}></AppliedJobDisplay> :""))

            }

            

            {
                remote && !onsite && jobs.map(job => products[job.id] && job.remote_or_onsite == "Remote"?<AppliedJobDisplay key={job.id} job={job}></AppliedJobDisplay> :"")
            }
            {
                onsite && !remote && jobs.map(job => products[job.id] && job.remote_or_onsite == "Onsite"?<AppliedJobDisplay key={job.id} job={job}></AppliedJobDisplay> :"")
            }
        </div>
    );
};

export default AppliedJobs;