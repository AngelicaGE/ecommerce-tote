import React, {useState} from 'react';
import '../styles/ProductDetail.scss'
import {Link} from 'react-router-dom'
//PROMETO MEJORAR LOS ETSILOS DE ESTE COMPONENT PARA LA SIGUIENTE ENTREGA :(

const ProductDetail = ({product}) => {
  return (
  <div className='ProductDetails'>
    <div className='dets-info'>  

      <section className='book-details'>
        <p className='title'><strong>{product.name}</strong></p>
          <img src={product.imagePath} alt="picture of the book" />
            <p className='section-title'>Book Details</p>
            <div className='book-details-group'>
              <p>Price:</p> <p>{product.price}</p>
            </div>
            <div className='book-details-group'>
              <p>Category:</p> <p>{product.category}</p>
            </div>
      </section>
    </div>

  </div>  
  );
};

export default ProductDetail;
