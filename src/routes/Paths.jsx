import React from 'react';
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import NavbarContainer from '../components/NavbarContainer'
import SearchProductsContainer from '../components/SearchProductsContainer'
import NotFound from '../components/NotFound';
import ProductDetailContainer from '../components/ProductDetailContainer';
import About from '../components/About';
import SearchContainer from '../components/SearchContainer';
import Landing from '../components/Landing';
import ProductsContainer from '../components/ProductsContainer';
import Cart from '../components/Cart';
import NewArrivals from '../components/NewArrivals';
import Favorites from '../components/Favorites';

const Paths = () => {
  return (
    <BrowserRouter basename="ecommerce-tote">
      <NavbarContainer name="Bazarcito lector 1"/>
      <Routes >
        {/* Cambiar este por un Landing page jsx con multiples ProductsContainerWithHook*/}
        <Route path="/" element={<Landing/>}/>
        <Route path='/category/:id' element={<SearchProductsContainer message='Category: ' maxResults={40} />}></Route>
        <Route path="/search/:id" element={<SearchProductsContainer message='Search: ' maxResults={40}/>}/>
        <Route path="/product/:id" element={<ProductDetailContainer/>}/>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/free" element={<SearchProductsContainer message='Free e-books' filter='full' maxResults={40}/>}></Route>
        <Route path="/ourpicks" element={<NewArrivals></NewArrivals>}></Route>
        <Route path="/search" element={<SearchContainer/>}></Route>
        <Route path='/wishlist' element={<Favorites></Favorites>}></Route>
        <Route path="/cart" element={<Cart></Cart>} ></Route>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;