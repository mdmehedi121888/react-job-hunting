import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Category from './Category';
import Jobs from './Jobs';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
     <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;