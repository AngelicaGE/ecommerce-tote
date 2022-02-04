import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProductsContainerWithHook from '../components/ProductsContainerWithHook'
import ProductsContainerWithPromises from '../components/ProductsContainerWithPromises'
import NotFound from '../components/NotFound';
import ProductDetailContainer from '../components/ProductDetailContainer';

const Paths = () => {
  return (
    <BrowserRouter>
      <Navbar name="TOTE-ME"></Navbar>
      <Routes>
        <Route path="/" element={<ProductsContainerWithHook/>}/>
        <Route path="/books" element={<ProductsContainerWithPromises/>}/>
        <Route path="/product/:id" element={<ProductDetailContainer/>}/>
        <Route path="/category/:id" element={<ProductsContainerWithPromises/>}/>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
};

export default Paths;
