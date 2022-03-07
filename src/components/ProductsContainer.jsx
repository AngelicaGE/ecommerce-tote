import React, {useState} from 'react'
import '../styles/ProductsContainer.scss'
import useGetProducts from '../hooks/useGetProducts';
import ProductListCarrousel from './ProductListCarrousel';

const ProductsContainer = ({category, message='', maxResults=40, 
                            startIndex=1, seeAll=true, createTitle=true}) => {
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
            <ProductListCarrousel products={products} loading={loading}></ProductListCarrousel>
            {
                seeAll?<p className='see-all' onClick={() => alert('TODO: Implement later')}>See more...</p>
                : ''
            }
        </div>
    );
}

export default ProductsContainer