import React, {useState, useEffect, useContext} from 'react'
import '../styles/Favorites.scss'
import useLocalStorage from "../hooks/useLocalStorage";
import { UserContext } from '../context/UserContext'
import FavsModal from '../containers/FavsModal';
import { NavLink } from 'react-router-dom';
import {  onAuthStateChanged} from "firebase/auth";
import { auth} from '../firebase/firebase'

const key = `likes`;
const likesDocument ="likes";

const Favorites = () => {
  const {getAllForUser, removeUserFavsFromDetails} = useContext(UserContext)
  const [modalStyle, setModalStyle] = useState("hide")
  const [modalProduct, setModalProduct] = useState();
  const [localLikes, setLocalLikes] = useLocalStorage(key, []);
  const [userLikes, setUserLikes] = useState([]);
  const [userId, setUserId] = useState(null);


  useEffect(() => {
    onAuthStateChanged(auth,  (userAuth) => {
      console.log(userAuth)
      if(userAuth){
        setUserId(userAuth.uid)
        console.log("Getting likes from user " );
        getAllForUser(likesDocument, userAuth.uid, setUserLikes);
      }
    })
  }, [])

  const handleOpenModal = (prod) => {
    console.log("handleOpenModal");
    setModalProduct(prod)
    setModalStyle("show")
}

const handleRemoveFromfavs = (productId) => {
  if (userId) {
    removeUserFavsFromDetails(productId, userId);
    let newLikes = [...userLikes];
    newLikes = newLikes.filter(like => like.productInfo.id !== productId)
    setUserLikes(newLikes);
  } else {
    let newLikes = [...localLikes];
    newLikes = newLikes.filter(like => like.id !== productId)
    setLocalLikes(newLikes);
  }
};


if((!userId && localLikes.length == 0) || (userId && userLikes.length ==0)){
  return (<div className='CartEmpty'>
      <p className='oops'>Your wishlist is empty at the moment.</p>
      <p className='quotes'>It costs nothing to wish :)</p>
      <NavLink to="/">Go explore</NavLink>
  </div>)
}

  return (
    <div className='Favorites products-container'>
      <div className='favorites-title'>
        <h1>Books in the wishlist</h1>
      </div>
        {
          userId? (
            userLikes.map((prod) =>(
              <div key={`fav-${prod.productInfo.id}`} className='fav-cont' onClick={() => handleOpenModal(prod.productInfo)}>
                <div className='fav-img-cont'>
                  <img src={prod.productInfo.imagePath} alt="favorite" />
                </div>
                <h2 className='fav-price'>${prod.productInfo.price} MXN</h2>
                <p>{prod.productInfo.title}</p>
              </div>
            ))
          ): (
            localLikes.map((prod) =>(
              <div key={`fav-${prod.id}`} className='fav-cont' onClick={() => handleOpenModal(prod)}>
                <div className='fav-img-cont'>
                  <img src={prod.imagePath} alt="favorite" />
                </div>
                <h2 className='fav-price'>${prod.price} MXN</h2>
                <p>{prod.title}</p>
              </div>
            ))
          )
        }
        {
          modalProduct?
          <FavsModal modalStyle={modalStyle} setModalStyle={setModalStyle} handleRemoveFromfavs={handleRemoveFromfavs} product={modalProduct}></FavsModal>
          : ''
        }
    </div>
  )
}

export default Favorites