import React, {useState, useEffect, useContext} from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import ItemCount from "../containers/ProductCount";
import HeartBorder from '../assets/icons/heart-empty-white-24.png'
import HeartFull from '../assets/icons/heart-full-white-24.png'
import useLocalStorage from "../hooks/useLocalStorage";
import {  onAuthStateChanged} from "firebase/auth";
import { auth} from '../firebase/firebase'

const key = `likes`;

const ProductSaleInfo = ({
  productInfo,
  sale,
  stock,
  amount,
  addItem,
  removeItem,
  handleAddToCart,
  isInCart,
  handleOpenModal
}) => {
  const {addtoUserFavs, isInUserFavs,removeUserFavsFromDetails} = useContext(UserContext)
  const [isLiked, setIsLiked] = useState()
  const [localLikes, setLocalLikes] = useLocalStorage(key, []);
  const [userId, setuserId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth,  (userAuth) => {
      if(userAuth){
        setuserId(userAuth.uid)
        console.log("find out if this book is liked inside user firebase");
        isInUserFavs(productInfo.id, userAuth.uid).then(liked=>{
          console.log(liked)  
          setIsLiked(liked)
        })
      }else{
        console.log("find out if this book is liked inside localStorage");
        const likeIndex = localLikes.find(like => like.id === productInfo.id);
        likeIndex? setIsLiked(true): setIsLiked(false);
      }
    })
  }, [])
  

  const handleAddToFavs = async () => {
    if(userId){
      console.log("add liked book to user");
      if(isLiked){
        removeUserFavsFromDetails(productInfo.id, userId)
      }else{
        addtoUserFavs(productInfo, userId)
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
    setIsLiked(!isLiked)
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
              disabled={isInCart}>
              Add to cart
            </button>
            <button
              onClick={() => handleOpenModal()}
              className="sale-btn buy-now">
              Buy it now
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
