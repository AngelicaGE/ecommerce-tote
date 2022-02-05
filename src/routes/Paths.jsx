import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavbarContainer from '../components/NavbarContainer'
import ProductsContainerWithHook from '../components/ProductsContainerWithHook'
import ProductsContainerWithPromises from '../components/ProductsContainerWithPromises'
import NotFound from '../components/NotFound';
import ProductDetailContainer from '../components/ProductDetailContainer';

const Paths = () => {
  return (
    <BrowserRouter>
      <NavbarContainer name="TOTE-ME"/>
      <Routes>
        <Route path="/" element={<ProductsContainerWithPromises/>}/>
        <Route path="/api" element={<ProductsContainerWithHook/>}/>
        <Route path="/product/:id" element={<ProductDetailContainer/>}/>
        <Route path="/category/:id" element={<ProductsContainerWithPromises/>}/>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
};

export default Paths;
