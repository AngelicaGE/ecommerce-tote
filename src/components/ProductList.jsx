//rafce
import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import Product from '../containers/Product';
import '../styles/ProductList.scss'

const ProductList = ({products}) => {
  return (
    <div className='ProductList'>
        <div className='products-container'>
            {
                products.map(product => (
                      <Product 
                        id={product.id} 
                        key={product.id} 
                        name={product.volumeInfo.title} 
                        saleability = {product.saleInfo.saleability}
                        price={product.saleInfo.listPrice} 
                        imagePath={product.volumeInfo.imageLinks}
                        freeLink={product.saleInfo.buyLink}>
                      </Product>
                  ))
            }
        </div>
    </div>
  );
};

export default ProductList;
