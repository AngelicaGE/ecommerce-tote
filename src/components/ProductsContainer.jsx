import React, {useState} from 'react'
import '../styles/ProductsContainer.scss'
import useGetProducts from '../hooks/useGetProducts';
import ProductListCarrousel from './ProductListCarrousel';
import { NavLink } from 'react-router-dom'

const ProductsContainer = ({category, message='', maxResults=40, 
                            startIndex=1, seeAll=true, createTitle=true, amountVisibleParameter=3}) => {
    let API = `https://www.googleapis.com/books/v1/volumes?q=${category}+subject&filter=paid-ebooks&startIndex=${startIndex}&maxResults=${maxResults}`;

    const {products, loading, error} = useGetProducts(API);

    return (
        <div className='ProductsContainer'>
            {
                createTitle?
                <>
                   <div className='category-title'>{category}</div>
                </>
                : ''
            }
            <p>{error}</p>
            <ProductListCarrousel products={products} loading={loading} amountVisibleParameter={amountVisibleParameter}></ProductListCarrousel>
            {
                seeAll?
                <div className='see-all'><NavLink to={`/search/${category}`}>See all...</NavLink></div>
                : ''
            }
        </div>
    );
}

export default ProductsContainer