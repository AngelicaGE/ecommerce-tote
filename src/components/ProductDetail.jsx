import React, {useContext, useState, useEffect} from 'react';
import '../styles/ProductDetail.scss'
import {NavLink} from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import ItemCount from '../containers/ProductCount';
import ProductSaleInfo from '../containers/ProductSaleInfo';

const ProductDetail = ({product, categories, stock}) => {
  const defaultCategories = 5;
  const [seeAllCategories, setSeeAllCategories] = useState(defaultCategories)
  const [amount, setAmount] = useState(1)
  const [isInCart, setIsInCart] = useState(false);

  const {addCartItem, productIsInCart} = useContext(CartContext)

  const details = product.volumeInfo;
  const sale = product.saleInfo;
  const images = details.imageLinks;

  const addItem = () => {
    console.log("one more")
    setAmount(amount + 1);
  };

  const removeItem = () => {
    console.log("one less")
    setAmount(amount - 1);
  };

  const handleAddToCart = () => {
    console.log("****** ADDING THE PRODUCT ******")
    const item = {...product, amount}
    console.log(item)
    // delete product?.kind
    addCartItem(item); 
    setIsInCart(true);
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

  useEffect(() => {
    try{
      let res = productIsInCart(product.id);
      setIsInCart(res);
    }catch(error){
      console.log(error);
    }
  }, [product])
  

  return (
  <div className='ProductDetails'>
    
    <section className='book-main-info'>
        {
          details.subtitle? 
          <><p className='title'> <strong>{details.title}</strong> <br/> {details.subtitle}</p> </>
          : <p className='title'><strong>{details.title}</strong></p>
        }
      <div className='authors'>
        {
          details.authors?
          <>
            <p>By: </p> {details.authors.map((author) => (
            <p key={author}>{author}</p>
          ))}
          </>
          : <p>No Author</p>
        }  
      </div>
    </section>

    <section className='book-categories'>
      <div className="categories">
          {
            categories?
            categories.filter((category, idx) => idx < seeAllCategories).map((category) => (
              <NavLink to={`/category/${category}`} key={category} className="category">
                {category}
              </NavLink>
            )) 
            : ''
          }
      </div>
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
    </section>

    <div className='group'>
    <section className='book-image'>
      <picture>
       <img src={images.thumbnail} alt="picture of the book" />
      </picture>
    </section>

    <section className='book-details'>
      <p className='section-title'>Book Details</p>
      <div className='book-details-group'>
        <p>Publisher: {details.publisher? details.publisher: ' No publisher'}</p>
      </div>
      <div className='book-details-group'>
        <p>Year: {details.publishedDate? details.publishedDate: ' No year'}</p>
      </div>
      <div className='book-details-group'>
        <p>Language: {details.language? details.language: 'No lang'}</p>
      </div>
      <div className='book-details-group'>
        <p>Pages: {details.pageCount? details.pageCount: ' Unknown'}</p>
      </div>
    </section>

    <section className='book-sale-info'>
      <ProductSaleInfo sale ={sale} stock={stock} amount={amount}
                        addItem={addItem} removeItem={removeItem}
                        handleAddToCart={handleAddToCart} 
                        isInCart={isInCart} className="ProductSaleInfo">                
      </ProductSaleInfo>
    </section>
    </div>

    <section className='book-synopsis'>
      <p className='section-title'>Synopsis</p>
      <br/>
      <p style={{textAlign: 'justify'}} dangerouslySetInnerHTML={{ __html: details.description}}></p>
    </section>
  </div>  
  );
};

export default ProductDetail;
