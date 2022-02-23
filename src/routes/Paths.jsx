import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavbarContainer from '../components/NavbarContainer'
import NotFound from '../components/NotFound';
import ProductDetailContainer from '../components/ProductDetailContainer';
import ProductsContainer from '../components/ProductsContainer';

const Paths = () => {
  return (
    <BrowserRouter>
      <NavbarContainer name="Bazar de libros"/>
      <Routes>
        <Route path="/" element={<ProductsContainer/>}/>
        <Route path="/category/:category" element={<ProductsContainer/>}/>
        <Route path="/product/:id" element={<ProductDetailContainer/>}/>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
};

export default Paths;