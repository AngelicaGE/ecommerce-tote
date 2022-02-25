import React, {useState} from 'react'
import useLocalStorage from "../hooks/useLocalStorage";
import '../styles/Favorites.scss'
import FavsModal from '../containers/FavsModal';
import { NavLink } from 'react-router-dom';

const key = `likes`;
const Favorites = () => {
  const [likes, setLikes] = useLocalStorage(key, []);
  const [modalStyle, setModalStyle] = useState("hide")
  const [modalProduct, setModalProduct] = useState();
  
  const handleOpenModal = (prod) => {
    console.log("handleOpenModal");
    setModalProduct(prod)
    setModalStyle("show")
}

if(likes.length == 0){
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
          likes.map((prod) =>(
            <div key={`fav-${prod.id}`} className='fav-cont' onClick={() => handleOpenModal(prod)}>
              <div className='fav-img-cont'>
                <img src={prod.imagePath} alt="favorite" />
              </div>
              <h2 className='fav-price'>${prod.price} MXN</h2>
              <p>{prod.title}</p>
            </div>
          ))
        }
        {
          modalProduct?
          <FavsModal modalStyle={modalStyle} setModalStyle={setModalStyle} likes={likes} setLikes={setLikes} product={modalProduct}></FavsModal>
          : ''
        }
    </div>
  )
}

export default Favorites