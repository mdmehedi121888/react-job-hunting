import React from 'react';

const SingleCategory = ({data}) => {
    // console.log(data);
    const {id,logo,category_name,availability}=data;
    return (
      
           
             <div className="card w-full lg:w-full bg-gray-100  shadow-xl">
  <figure className='pt-5'><img src={logo} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-xl font-bold">{category_name}</h2>
    <h1>{availability}</h1>
      
  </div>
            </div>
          
    );
};

export default SingleCategory;