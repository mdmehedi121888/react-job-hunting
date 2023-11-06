import React, { useEffect, useState } from 'react';
import SingleJob from './SingleJob';

const Jobs = () => {

    const [datas,setDatas] = useState([]);
    const [state,setState] = useState(false);
    
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then( data => setDatas(data));
    },[])
    return (
        <div className='grid items-center  w-[100%]'>
            {/* title part */}
            <div className='text-center mb-10'>
                <h1 className='font-bold text-3xl mb-3'>Featured Jobs</h1>
                <p className='mb-20'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            {/* jobs map section */}

           <div className=''>
           <div className='grid grid-cols-2 gap-10 items-center justify-center lg:mx-32'>
                {
                    datas.slice(0,state?6:4).map(data => <SingleJob key={data.id} data={data}></SingleJob>)
                   
                }
                
            </div>
            <div className='w-full flex items-center justify-center my-10'>
                 {
                    state ? <button onClick={()=> setState(!state)} className='btn btn-success w-[20%]'>See Less</button> :
                    <button onClick={()=> setState(!state)} className='btn btn-success w-[20%]'>See More</button>
                 }
                 </div>
           </div>

        </div>
    );
};

export default Jobs;