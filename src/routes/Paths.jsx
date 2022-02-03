import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductsContainerWithHook from '../components/ProductsContainerWithHook'
const Paths = () => {
  return (
    <BrowserRouter>
      <Navbar name="TOTE-ME"></Navbar>
      <Routes>
        <Route path="/" element={<ProductsContainerWithHook/>}/>
        <Route path="*" element={<h1>ERROR 404</h1>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
};

export default Paths;
