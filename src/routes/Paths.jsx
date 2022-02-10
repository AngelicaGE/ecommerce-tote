import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavbarContainer from '../components/NavbarContainer'
import ProductsContainerWithHook from '../components/ProductsContainerWithHook'
import NotFound from '../components/NotFound';
import ProductDetailContainer from '../components/ProductDetailContainer';
import About from '../components/About';

const Paths = () => {
  return (
    <BrowserRouter>
      <NavbarContainer name="Bazar de libros"/>
      <Routes>
        {/* Cambiar este por un Landing page jsx con multiples ProductsContainerWithHook*/}
        <Route path="/" element={<ProductsContainerWithHook category="Juvenile Nonfiction" maxResults={40}/>}/>
        <Route path="/category/:id" element={<ProductsContainerWithHook  category="Juve" maxResults={40}/>}/>
        <Route path="/product/:id" element={<ProductDetailContainer/>}/>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;




          /*
            <Route path="/" element={<ProductsContainerWithHook category="Juvenile Nonfiction" maxResults={40}/>}/>
            <Route path="/" element={<ProductsContainerWithPromises/>}/>
            <Route path="/category/:id" element={<ProductsContainerWithPromises/>}/>
          */