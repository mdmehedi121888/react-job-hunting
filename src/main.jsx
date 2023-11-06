import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './Blog.jsx';
import Statistics from './Statistics.jsx';
import AppliedJobs from './AppliedJobs.jsx';
import Home from './Home.jsx';
import JobDetails from './JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'home',
        element:<Home></Home>,
      },
      {
        path:'blog',
        element:<Blog></Blog>,
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'appliedJobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=> fetch('jobs.json')
      },
      {
        path:'jobDetails',
        element:<JobDetails></JobDetails>,
      }
    ],
    
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>
)
