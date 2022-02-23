//rafce
import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import Product from '../containers/Product';
import '../styles/ProductList.scss'

const ProductList = ({category, products}) => {
  return (
    <div className='ProductList'>
      <h1>{category}</h1>
        <div className='products-container'>
            {
                products.map(product => (
                      <Product 
                        id={product.id} 
                        key={product.id} 
                        name={product.name} 
                        price={product.price} 
                        imagePath={product.imagePath}>
                      </Product>
                  ))
            }
        </div>
    </div>
  );
};

export default ProductList;
