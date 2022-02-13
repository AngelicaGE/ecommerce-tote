import React from 'react'
import '../styles/ProductsContainer.scss'
import { NavLink } from 'react-router-dom';
import useGetProducts from '../hooks/useGetProducts';
import ProductList from './ProductList';

const ProductsContainer = ({category, message='', maxResults=40}) => {
    const API = `https://www.googleapis.com/books/v1/volumes?q=${category}+subject&filter=paid-ebooks&maxResults=${maxResults}`;

    const {products, loading, error} = useGetProducts(API);

    return (
        <div className='ProductsContainer'>
            <div className='category-title'>{category}</div>
            {
                loading? <h1>LOADING</h1>: ''
            }
            <p>{error}</p>
            <ProductList products={products} hookAPI={true}></ProductList>
            <p className='see-all' onClick={() => alert('TODO: Implement later')}>See more...</p>
        </div>
    );
}

export default ProductsContainer