import React from 'react';
import ProductDetail from './ProductDetail';
import { useParams } from "react-router-dom";

const ProductDetailContainer = () => {
    //logic to grab item
    const { id } = useParams();

  return (
  <div>
    <h1>PRODUCT WITH ID {id}</h1>
    <ProductDetail product={null}></ProductDetail> 
  </div>);
};

export default ProductDetailContainer;
