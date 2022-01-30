//rafce
import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import Product from '../containers/Product';
import '../styles/ProductList.scss'

const ProductList = () => {
  const products = useGetProducts();

  return (
    <div className='ProductList'>
        <div className='products-container'>
            {
                products.map(product => (
                    <Product name={product.title} price={product.price} imagePath={product.images[0]} key={product.id}></Product>
                ))
            }
        </div>
    </div>
  );
};

export default ProductList;
