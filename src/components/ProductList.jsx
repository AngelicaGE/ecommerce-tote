//rafce
import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import ProductItem from '../containers/ProductItem';
import '../styles/ProductList.scss'

const ProductList = () => {
  const products = useGetProducts();

  return (
    <div className='ProductList'>
        <div className='products-container'>
            {
                products.map(product => (
                    <ProductItem name={product.title} price={product.price} imagePath={product.images[0]} key={product.id}></ProductItem>
                ))
            }
        </div>
    </div>
  );
};

export default ProductList;
