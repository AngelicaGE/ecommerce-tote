import React, {useState} from 'react';
import '../styles/ProductDetail.scss'
import {Link} from 'react-router-dom'
//PROMETO MEJORAR LOS ETSILOS DE ESTE COMPONENT PARA LA SIGUIENTE ENTREGA :(

const ProductDetail = ({product, categories, stock}) => {
  const details = product.volumeInfo;
  const sale = product.saleInfo;
  const images = details.imageLinks;
  const [amount, setAmount] = useState(1)

  const addItem = () => {
    setAmount(amount + 1);
  };

  const removeItem = () => {
    setAmount(amount - 1);
  };


  return (
  <div className='ProductDetails'>
    
    <section className='book-main-info'>
      <div className='book-name'>
        {
          details.subtitle? 
          <>
            <p className='title'> <strong>{details.title}:</strong> {details.subtitle}</p>
          </>
          :
          <p className='title'><strong>{details.title}</strong></p>
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
    </section>

    <div className='dets-info'>  
      <section className='book-image'>
        <picture>
          <img src={images.thumbnail} alt="picture of the book" />
        </picture>
      </section>

      <section className='book-details'>
            <p className='section-title'>Book Details</p>
            <div className='book-details-group'>
              <p>Publisher: </p> <p>{details.publisher}</p>
            </div>
            <div className='book-details-group'>
              <p>Year:</p> <p>{details.publishedDate}</p>
            </div>
            <div className='book-details-group'>
              <p>Language:</p> <p>{details.language}</p>
            </div>
            <div className='book-details-group'>
              <p>Pages:</p> <p>{details.pageCount}</p>
            </div>

      </section>
    </div>

    <section className='book-sale-info'>
          <div className='book-sale-group'>
            {
              (sale.saleability == "FOR_SALE")
              ?
                <>
                  <p>Price: </p>
                  <p> ${sale.listPrice.amount} {sale.listPrice.currencyCode}</p>
                </>
              : (sale.saleability == "FREE")
              ?
                <>
                  <p>Price: </p>
                  <p> FREE</p>
                </>
                :
                <p>Not for sale, sorry :/</p> 
              }
          </div>

          <div className='book-sale-group'> 
          {
              (sale.saleability == "FOR_SALE" && stock)
              ?
                <>
                  <p>Units in stock: </p>
                  <p> {stock}</p>
                </>  
              : (sale.saleability == "FREE")
              ?
                ''            
                :
                <p>Not for sale, sorry :/</p> 
              }
          </div>

          {
            (sale.saleability == "FOR_SALE" && stock)?
            <div className='book-sale-group'>
              <div>
                <button disabled={amount<=1} onClick={()=>removeItem()}> - </button>
                <p>{amount}</p>
                <button disabled={amount>=stock} onClick={()=>addItem()}> + </button>
              </div>
            </div> : ''
          }
          {
                (sale.saleability == "FOR_SALE")
                ?
                <>
                  <button className='sale-btn add-cart'> Add to cart </button>
                  <button className='sale-btn buy-now'> Buy it now </button>
                </>
                  : (sale.saleability == "FREE")
                ?
                  <a href={sale.buyLink} target="_blank">Get it now</a>
                :
                  <p>Not for sale, sorry :/</p> 
            }
    </section>

    <section className='book-synopsis'>
      <p className='section-title'>Synopsis</p>
      <br/>
      <p dangerouslySetInnerHTML={{ __html: details.description}}></p>
    </section>

  </div>  
  );
};

export default ProductDetail;
