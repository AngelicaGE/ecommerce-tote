import React, {useContext, useState} from 'react';
import '../styles/ProductDetail.scss'
import {NavLink} from 'react-router-dom'
import ItemCount from '../containers/ProductCount';
import Category from '../containers/Category';
import { CartContext } from '../context/CartContext';

const ProductDetail = ({product, categories, stock}) => {
  const defaultCategories = 5;
  const [seeAllCategories, setSeeAllCategories] = useState(defaultCategories)
  const [amount, setAmount] = useState(1)
  const {addCartItem} = useContext(CartContext)

  const details = product.volumeInfo;
  const sale = product.saleInfo;
  const images = details.imageLinks;

  const addItem = () => {
    console.log("one more");
    setAmount(amount + 1);
  };

  const removeItem = () => {
    console.log("one less");
    setAmount(amount - 1);
  };

  const handleAddToCart = () => {
    console.log("****** ADDING THE PRODUCT ******")
    console.log(product)
    // delete product?.kind
    addCartItem({
      product,
      amount
    }); 
  }


  const clickOnSeeMoreCats = () => {
    console.log('seeAllCategories')
    console.log(categories)
    if(seeAllCategories < categories.length){
      setSeeAllCategories(categories.length);
    }else{
      setSeeAllCategories(defaultCategories);
    }
    console.log(seeAllCategories)
  }


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
          )): <p>No Author</p>
        }  
      </div>
      <div className="categories">
        {
          categories?
          categories.filter((category, idx) => idx < seeAllCategories).map((category) => (
            <NavLink to={`/category/${category}`} key={category} className="category">
              <Category category={category}></Category>
            </NavLink>
          )) 
          : ''
        }
        {
          categories?
          <div className='see-all'>
            <p onClick={()=> clickOnSeeMoreCats()}>
             {
                (categories.length > seeAllCategories)? 'See all...' 
                : (categories.length <= seeAllCategories && seeAllCategories > defaultCategories)?'See less...'
                : (categories.length == seeAllCategories && seeAllCategories != defaultCategories)? 'See less...'
                :''
             }
            </p>
          </div>:''
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

      <section className='book-synopsis'>
        <p className='section-title'>Synopsis</p>
        <br/>
        <p dangerouslySetInnerHTML={{ __html: details.description}}></p>
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
              <ItemCount amount={amount} stock={stock} onAdd={addItem} onRemove={removeItem}></ItemCount>
            </div> : ''
          }
          {
                (sale.saleability == "FOR_SALE")
                ?
                <>
                  <button onClick={()=>handleAddToCart()} className='sale-btn add-cart'> Add to cart </button>
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
