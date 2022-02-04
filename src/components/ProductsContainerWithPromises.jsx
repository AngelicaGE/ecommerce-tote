import React, {useState, useEffect} from 'react';
import ProductList from './ProductList';
import {getProducts} from '../helpers/promises'

const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        getProductsAsync();  
    }, [products]);
    
    const getProductsAsync = async () => {
        try {
            let res = await getProducts;
            setProducts(res);
            setLoading(false);
            console.log(products)
        } catch (error) {
          console.log({ error });
          setErrorMessage("ERORR: " + error.message);
        } finally {
          console.log("Finished consuming getProducts API");
        }
      };


  return (
  <div>
      <div>{errorMessage}</div>
      {
        (products.length == 0 && !loading) ? <div>No products available</div>
        : (loading) ? <div>Loading...</div>
        : <ProductList products={products} hookAPI={false}></ProductList>
      }
  </div>
  );
};

export default ProductsContainer;
