//rafce
import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import Product from '../containers/Product';
import '../styles/ProductList.scss'

const ProductList = ({products, hookAPI}) => {
  return (
    <div className='ProductList'>
        <div className='products-container'>
            {
                products.map(product => (
                    hookAPI ? <Product name={product.title} price={product.price} imagePath={product.images[0]} key={product.id} hookAPI={hookAPI}></Product>
                    : <Product name={product.name} price={product.price} imagePath={product.imagePath} key={product.id} hookAPI={hookAPI}></Product>
                  ))
            }
        </div>
    </div>
  );
};

export default ProductList;
