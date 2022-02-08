import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import ProductList from './ProductList';

const ProductsContainerWithHook = ({category, maxResults}) => {
    // can only query 40 results per page
    const API = `https://www.googleapis.com/books/v1/volumes?q=${category}+subject&filter=paid-ebooks&maxResults=${maxResults}`; //'https://www.googleapis.com/books/v1/volumes?q=all&maxResults=40';

    const {products, loading, error} = useGetProducts(API);

    return (
        <div>
            <h1>{category}</h1>
            {
                loading? <h1>LOADING</h1>: ''
            }
            <ProductList products={products} hookAPI={true}></ProductList>
        </div>
    );
};

export default ProductsContainerWithHook;


/**
partial - Returns results where at least parts of the text are previewable.
full - Only returns results where all of the text is viewable.
free-ebooks - Only returns results that are free Google eBooks.
paid-ebooks - Only returns results that are Google eBooks with a price.
ebooks - Only returns results that are Google eBooks, paid or free. Examples of non-eBooks would be publisher content that is available in limited preview and not for sale, or magazines.
 */