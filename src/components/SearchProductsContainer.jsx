import React, {useState, useEffect} from 'react';
import '../styles/SearchProductsContainer.scss'
import { useParams } from "react-router-dom";
import useGetProducts from '../hooks/useGetProducts';
import ProductList from './ProductList';
import { ScrollerTop } from '../containers/ScrollerTop';
import LoadingElement from '../containers/LoadingElement'

const SearchProductsContainer = ({message='', filter='paid-ebooks', maxResults=40}) => {
    const { id } = useParams();
    const [API, setAPI] = useState(`https://www.googleapis.com/books/v1/volumes?q=${id}+subject&filter=${filter}&maxResults=${maxResults}`)

    const {products, loading, error} = useGetProducts(API);

    return (
        <div className='SearchProductsContainer'>
            <h1>{message} {id}</h1>
            <p>{error}</p>
            {
                loading? <LoadingElement></LoadingElement>: ''
            }
            <ProductList products={products}></ProductList>
            <div>
                <ScrollerTop/>
            </div>
        </div>
    );
};

export default SearchProductsContainer;


/**
partial - Returns results where at least parts of the text are previewable.
full - Only returns results where all of the text is viewable.
free-ebooks - Only returns results that are free Google eBooks.
paid-ebooks - Only returns results that are Google eBooks with a price.
ebooks - Only returns results that are Google eBooks, paid or free. Examples of non-eBooks would be publisher content that is available in limited preview and not for sale, or magazines.
 */