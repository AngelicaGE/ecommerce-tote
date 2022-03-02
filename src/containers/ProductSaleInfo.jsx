import React, {useState, useEffect, useContext} from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import ItemCount from "../containers/ProductCount";
import HeartBorder from '../assets/icons/heart-empty-white-24.png'
import HeartFull from '../assets/icons/heart-full-white-24.png'
import useLocalStorage from "../hooks/useLocalStorage";
import {collection, addDoc} from "firebase/firestore"
import { db, auth } from "../firebase/firebase";


const key = `likes`;
const likesDocument = "likes";

const ProductSaleInfo = ({
  productInfo,
  sale,
  stock,
  amount,
  addItem,
  removeItem,
  handleAddToCart,
  isInCart,
  handleOpenModal,
}) => {
  const {user, addtoUserFavs, isInUserFavs,removeUserFavsFromDetails} = useContext(UserContext)
  const [isLiked, setIsLiked] = useState()
  const [localLikes, setLocalLikes] = useLocalStorage(key, []);
  const [userLikes, setUserLikes] = useState();

  useEffect(() => {
    /*
      if(user){
      
        console.log("find out if this book is liked in the db likes table for this user");
        console.log(user)
        try {
          isInUserFavs(productInfo.id, setIsLiked)
        } catch (error) {
          console.log(error)
        }
        console.log(isLiked)
      }else{
        console.log("find out if this book is liked inside localStorage");
        const likeIndex = await localLikes.find(like => like.id === productInfo.id);
        if(likeIndex){
          setIsLiked(true)
        }else{
          setIsLiked(false)
        }
      }*/
  }, [])
  

  const handleAddToFavs = async () => {
    if(user){
      console.log("add liked book to user");
      if(isLiked){
        removeUserFavsFromDetails(productInfo.id, setIsLiked);
      }else{
        addtoUserFavs(productInfo, setIsLiked);
      }
    }else{
      console.log("add liked book to localStorage");
      let newLikes;
      if(isLiked){
        newLikes = [...localLikes];
        newLikes = newLikes.filter(like => like.id !== productInfo.id)
      }else{
        newLikes = [...localLikes, productInfo];
      }
      console.log(newLikes);
      setLocalLikes(newLikes);
    }
  };

  return (
    <>
      <div className="ProductSaleInfo">
        <div className="book-sale-group">
          {sale.saleability == "FOR_SALE" ? (
            <>
              <p>Price: </p>{" "}
              <p>
                {" "}
                ${sale.listPrice.amount} {sale.listPrice.currencyCode}
              </p>
            </>
          ) : sale.saleability == "FREE" ? (
            <p>Price: FREE</p>
          ) : (
            <p>Not for sale, sorry :/</p>
          )}
        </div>

        <div className="book-sale-group">
          {sale.saleability == "FOR_SALE" && stock ? (
            <>
              <p>Units in stock: </p>
              <p> {stock}</p>
            </>
          ) : (
            ""
          )}
        </div>

        {sale.saleability == "FOR_SALE" && stock ? (
          <div className="book-sale-group">
            <ItemCount
              className="ItemCount"
              amount={amount}
              stock={stock}
              onAdd={addItem}
              onRemove={removeItem}
            ></ItemCount>
          </div>
        ) : (
          ""
        )}
        {sale.saleability == "FOR_SALE" ? (
          <div className="sale-btns">
            <button
              className="sale-btn add-cart"
              onClick={() => handleAddToCart()}
              disabled={isInCart}
            >
              {" "}
              Add to cart{" "}
            </button>
            <button
              onClick={() => handleOpenModal()}
              className="sale-btn buy-now"
            >
              {" "}
              Buy it now{" "}
            </button>
          </div>
        ) : sale.saleability == "FREE" ? (
          <a href={sale.buyLink} className="sale-btn buy-now" target="_blank">
            Get it now
          </a>
        ) : (
          ""
        )}
        {sale.saleability == "FOR_SALE" ? (
          <NavLink to="/cart">See in cart</NavLink>
        ) : (
          ""
        )}
      </div>
      <div className="like-cont">
        <img onClick={handleAddToFavs} src={isLiked? HeartFull :HeartBorder} alt="like-icon" />
        <p onClick={handleAddToFavs}> {isLiked? 'Remove from whishlist': 'Add to wishlist'}</p>
      </div>
    </>
  );
};

export default ProductSaleInfo;
