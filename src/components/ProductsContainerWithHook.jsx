import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import ProductList from './ProductList';

const ProductsContainerWithHook = () => {
    const products = useGetProducts();

    return (
        <div>
            <ProductList products={products} hookAPI={true}></ProductList>
        </div>
    );
};

export default ProductsContainerWithHook;
