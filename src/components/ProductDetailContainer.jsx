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
    const [stock, setStock] = useState(1)

    
    useEffect(async() => {
      // assign categories
        try{
          const res = await getCategories(product.volumeInfo.categories);
          setCategories(res)
        }catch(error){
          console.log(error)
          setCategories(product.volumeInfo.categories)
        }finally{
          console.log("finished consuming getCategories promise")
        }
      // assign stock
      // since API res does not include a stock value I create one with algorithm
      if(product.saleInfo.saleability == "FOR_SALE"){
        const seed = product.saleInfo.listPrice.amount
        const first = seed.toString().charAt(0);
        const second = seed.toString().charAt(1);
        setStock(parseInt(first) + parseInt(second));
      }

    }, [product]);
    
  return (
  <div>
    {
      loading? <h1>Loading...</h1>
      : <ProductDetail product={product} categories={categories} stock={stock}></ProductDetail> 

    }
  </div>);
};

export default ProductDetailContainer;
