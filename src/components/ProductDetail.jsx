import React from 'react';
import '../styles/ProductDetail.scss'

const ProductDetail = ({product, categories}) => {
  const details = product.volumeInfo;
  const images = details.imageLinks;
  return (
  <div className='ProductDetails'>
    
    <div className='main-info'>
      <div className='book-name'>
        {
          details.subtitle? 
          <>
            <h3>{details.title}: </h3>
            <h4> {details.subtitle}</h4>
          </>
          :
          <h3>{details.title}</h3>
        }
      </div>
      <div className='authors'>
        {
          details.authors?
          details.authors.map((author) => (
            <p key={author}>{author}</p>
          )): 'No author'
        }  
      </div>
      <div className="categories">
        {
          categories?
          categories.map((category) => (
            <div key={category} className="category">
              {category}
            </div>
          )): ''
        }
      </div>
    </div>

    <div className='image'>
      <picture>
        {
          images.medium &&
          <source  media="(min-width:800px)" srcSet={images.medium}/>
        }
        {
          images.large &&
            <source  media="(min-width:1400px)" srcSet={images.large}/>
        }
        <img src={images.thumbnail} alt="picture of the book" />
      </picture>

    </div>

  </div>  
  );
};

export default ProductDetail;
