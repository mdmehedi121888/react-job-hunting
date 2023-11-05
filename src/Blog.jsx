import React from 'react';

const Blog = () => {
    return (
      <div className='min-h-[68vh] '>
        <h1 className='text-4xl mb-20 font-bold text-center'>Blog</h1>
             <div className='w-full flex items-center justify-center'>  
         <div className='w-[80%]'>
            <h1 className='font-bold text-2xl my-5'>When should you use context api ?</h1>
            <p>You should use the React Context API when you need to share data across multiple components in your application, especially if you have complex prop chains, need to manage global state, or want to avoid passing props down the component tree extensively. However, don't overuse it, and consider other state management options for larger projects.</p>
            <h1 className='font-bold text-2xl my-5'>What is custom hook ?</h1>
            <p>A custom hook in React is a JavaScript function that encapsulates and reuses logic for state management or side effects in functional components. It follows a naming convention starting with "use" and can be shared and reused across components, enhancing code organization and reusability.</p>
            <h1>What is useRef ?</h1>
            <p>`useRef` is a React hook for creating references to DOM elements and for persisting mutable values between renders. It's commonly used for accessing and manipulating the DOM and for managing values that don't trigger re-renders.</p>
            <h1 className='font-bold text-2xl my-5'>What is useMemo ?</h1>
            <p>useMemo is a hook in React that allows you to memoize the result of a function and cache it so that the function is only re-computed when its dependencies change. Memoization is a technique to optimize performance in scenarios where expensive calculations are involved and you want to prevent unnecessary recomputation.

The typical use case for useMemo is when you have a computationally expensive function or calculation in your component that depends on certain values, and you want to avoid recalculating it on every render when those dependencies haven't changed.</p>
<h1 className='font-bold text-2xl my-5'>What is useRef ?</h1>
<p className='mb-10'>`useRef` is a React hook that allows you to create and maintain references to DOM elements and persist mutable values across renders. It's commonly used for accessing and interacting with the DOM and for storing values that shouldn't trigger re-renders.</p>
        </div>
             </div>
      </div> 
    );
};

export default Blog;