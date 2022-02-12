import React from 'react'
import '../styles/ProductsContainer.scss'
import { NavLink } from 'react-router-dom';
import useGetProducts from '../hooks/useGetProducts';
import ProductList from './ProductList';
import Category from '../containers/Category';

const ProductsContainer = ({category, message='', maxResults=40}) => {
    const API = `https://www.googleapis.com/books/v1/volumes?q=${category}+subject&filter=paid-ebooks&maxResults=${maxResults}`;

    const {products, loading, error} = useGetProducts(API);

    return (
        <div className='ProductsContainer'>
            
            <div className='category-title'><Category category={category}></Category></div>
            {
                loading? <h1>LOADING</h1>: ''
            }
            <p>{error}</p>
            <ProductList products={products} hookAPI={true}></ProductList>
            <p className='see-more' onClick={() => alert('TOTO: Implement later')}>See more...</p>
        </div>
    );
}

export default ProductsContainer