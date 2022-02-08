import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavbarContainer from '../components/NavbarContainer'
import ProductsContainerWithHook from '../components/ProductsContainerWithHook'
import ProductsContainerWithPromises from '../components/ProductsContainerWithPromises'
import NotFound from '../components/NotFound';
import ProductDetailContainer from '../components/ProductDetailContainer';
import Test from '../components/test';
const Paths = () => {
  return (
    <BrowserRouter>
      <NavbarContainer name="Bazar de libros"/>
      <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="/product/:id" element={<ProductDetailContainer/>}/>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        {
          /*
                  <Route path="/" element={<ProductsContainerWithHook category="Juvenile Nonfiction" maxResults={40}/>}/>

            <Route path="/" element={<ProductsContainerWithPromises/>}/>
            <Route path="/category/:id" element={<ProductsContainerWithPromises/>}/>
          */
        }
      </Routes>
    
    </BrowserRouter>
  );
};

export default Paths;
