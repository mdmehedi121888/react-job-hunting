import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";


const Statistics = () => {

    const data = [
        {
          name: "Ass 1",
          value: 60,
          
        },
        {
          name: "Ass 2",
          value: 60,
        
        },
        {
          name: "Ass 3",
          value: 56,
        
        },
        {
          name: "Ass 4",
         
          value: 58,
        
        },
        {
          name: "Ass 5",
          
          value: 59,
          
        },
        {
          name: "Ass 6",
          
          value: 60,
          
        },
        {
          name: "Ass 7",
          value: 59,
         
        }
      ];



    return (
        <div className='h-[68vh]'>
            <h1 className='text-4xl font-bold text-center'>Statistics</h1>
           <div className='flex items-center justify-center h-full'>
           <div>
            <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
            </div>
           </div>
        </div>
    );
};

export default Statistics;