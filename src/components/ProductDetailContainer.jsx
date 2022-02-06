import React, {useState, useEffect} from 'react';
import ProductDetail from './ProductDetail';
import { useParams } from "react-router-dom";
import useGetProduct from '../hooks/useGetProduct';
import {getCategories} from '../helpers/promises.js'

const ProductDetailContainer = () => {
    //logic to grab item
    const { id } = useParams();
    const API = `https://www.googleapis.com/books/v1/volumes/${id}`;
    const {product, loading, error} = useGetProduct(API);
    const [categories, setCategories] = useState([])
    
    useEffect(async() => {
        try{
          const res = await getCategories(product.volumeInfo.categories);
          setCategories(res)
        }catch(error){
          console.log(console.log(error))
        }finally{
          //console.log("finished consuming getCategories promise")
        }
    }, [product]);
    
  return (
  <div>
    {
      loading? <h1>Loading...</h1>
      : <ProductDetail product={product} categories={categories}></ProductDetail> 

    }
  </div>);
};

export default ProductDetailContainer;
