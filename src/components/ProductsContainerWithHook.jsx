import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import ProductList from './ProductList';

const ProductsContainerWithHook = () => {
    const API = 'https://api.escuelajs.co/api/v1/products';
    const {products, loading, error} = useGetProducts(API);

    return (
        <div>
            {
                loading? <h1>LOADING</h1>: ''
            }
            <ProductList products={products} hookAPI={true}></ProductList>
        </div>
    );
};

export default ProductsContainerWithHook;
