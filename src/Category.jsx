import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const Category = () => {
    const [datas,setDatas] = useState([]);
    useEffect(()=>{
        fetch('../data/categories.json')
        .then(res => res.json())
        .then( data => setDatas(data));
    },[])
    return (
        < div className='my-10'>
            {/* title part */}
            <div className='text-center mb-10'>
                <h1 className='font-bold text-3xl mb-3'>Job Category List</h1>
                <p className='mb-20'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

           {/* category cart part */}
        
           <div className='grid mt-5 grid-cols-2  lg:grid-cols-4 mx-auto items-center justify-center mx-10 gap-5'>
           {
                datas.map(data => <SingleCategory key={data.id} data={data}></SingleCategory>)
            }
           </div>
    </div>
        
    );
};

export default Category;