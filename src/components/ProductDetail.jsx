import React, { useContext, useState, useEffect } from "react";
import "../styles/ProductDetail.scss";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from '../context/UserContext'
import ProductSaleInfo from "../containers/ProductSaleInfo";
import BuyModal from "../containers/BuyModal";
import {  onAuthStateChanged} from "firebase/auth";
import { auth} from '../firebase/firebase'

const defaultCategories = 5;

const ProductDetail = ({ product, categories, stock }) => {
  const [seeAllCategories, setSeeAllCategories] = useState(defaultCategories);
  const [amount, setAmount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const { addCartItem, productIsInCart } = useContext(CartContext);
  const {addToUserCart, isInUserCart} = useContext(UserContext)

  const [modalStyle, setModalStyle] = useState("hide");
  const [userId, setuserId] = useState(null);

  const details = product.volumeInfo;
  const sale = product.saleInfo;
  const images = details.imageLinks;

  const addItem = () => {setAmount(amount + 1);};
  const removeItem = () => {setAmount(amount - 1);};

  const createItem = () => {
    // create new item with only properties needed for cart
    const item = {
      id: product.id,
      title: details.title,
      subtitle: details.subtitle ? details.subtitle : "",
      price: sale.listPrice.amount,
      currency: sale.listPrice.currencyCode,
      stock: stock,
      amount,
      imagePath: images.thumbnail,
      author: details.authors[0]
    };
    return item;
  };

  const handleAddToCart = () => {
    console.log("****** ADDING THE PRODUCT ******");
    const item = createItem();
    //console.log(item);
    if(userId){
      addToUserCart(item, userId).then(res=>{
        alert("Cart updated", res);
        setIsInCart(true);
      })
    }else{
      addCartItem(item).then(()=>{
        setIsInCart(true);
      })
    }
  };

  const clickOnSeeMoreCats = () => {
    //console.log(categories);
    if (seeAllCategories < categories.length) {
      setSeeAllCategories(categories.length);
    } else {
      setSeeAllCategories(defaultCategories);
    }
    //console.log(seeAllCategories);
  };

  // methods for modal
  const handleOpenModal = () => {
    //console.log("handleOpenModal");
    setModalStyle("show");
  };
  // end of methods for modal

  useEffect(() => {
    onAuthStateChanged(auth,  (userAuth) => {
        //console.log(userAuth)
        if(userAuth){
          setuserId(userAuth.uid);
          isInUserCart(product.id, userAuth.uid).then(res =>{
            setIsInCart(res);
          });
        }else{
          let res = productIsInCart(product.id);
          setIsInCart(res);
        }
      })
  }, [product]);

  return (
    <div className="ProductDetails">
      <section className="book-main-info">
        {details.subtitle ? (
          <>
            <p className="title">
              <strong>{details.title}</strong> <br /> {details.subtitle}
            </p>
          </>
        ) : (
          <p className="title">
            <strong>{details.title}</strong>
          </p>
        )}
        <div className="authors">
          {details.authors ? (
            <>
              <p>By: </p>{" "}
              {details.authors.map((author) => (
                <p key={author}>{author}</p>
              ))}
            </>
          ) : (
            <p>No Author</p>
          )}
        </div>
      </section>

      <section className="book-categories">
        <div className="categories">
          {categories
            ? categories
                .filter((category, idx) => idx < seeAllCategories)
                .map((category) => (
                  <NavLink
                    to={`/category/${category}`}
                    key={category}
                    className="category"
                  >
                    {category}
                  </NavLink>
                ))
            : ""}
        </div>
        {categories ? (
          <div className="see-all">
            <p onClick={() => clickOnSeeMoreCats()}>
              {categories.length > seeAllCategories
                ? "See all..."
                : categories.length <= seeAllCategories &&
                  seeAllCategories > defaultCategories
                ? "See less..."
                : categories.length === seeAllCategories &&
                  seeAllCategories !== defaultCategories
                ? "See less..."
                : ""}
            </p>
          </div>
        ) : (
          ""
        )}
      </section>

      <div className="group">
        <section className="book-image">
          <picture>
            <img src={images.thumbnail} alt={`Book ${details.title}`}/>
          </picture>
        </section>

        <section className="book-details">
          <p className="section-title">Book Details</p>
          <div className="book-details-group">
            <p>
              Publisher:{" "}
              {details.publisher ? details.publisher : " No publisher"}
            </p>
          </div>
          <div className="book-details-group">
            <p>
              Year: {details.publishedDate ? details.publishedDate : " No year"}
            </p>
          </div>
          <div className="book-details-group">
            <p>Language: {details.language ? details.language : "No lang"}</p>
          </div>
          <div className="book-details-group">
            <p>Pages: {details.pageCount ? details.pageCount : " Unknown"}</p>
          </div>
        </section>

        <section className="book-sale-info">
          <ProductSaleInfo
            productInfo={createItem()}
            sale={sale}
            stock={stock}
            amount={amount}
            addItem={addItem}
            removeItem={removeItem}
            handleAddToCart={handleAddToCart}
            isInCart={isInCart}
            handleOpenModal={handleOpenModal}
            className="ProductSaleInfo"
            userId={userId}
          ></ProductSaleInfo>
        </section>
      </div>

      <section className="book-synopsis">
        {details.description ? <p className="section-title">Synopsis</p> : ""}
        <br />
        <p
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{ __html: details.description }}
        ></p>
      </section>

      {/**** MODAL****/}
      <BuyModal
        modalStyle={modalStyle}
        products={createItem()}
        setModalStyle={setModalStyle}
      ></BuyModal>
    </div>
  );
};

export default ProductDetail;
