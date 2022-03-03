import React from 'react'
import { NavLink } from 'react-router-dom';
import useLocalStorage from "../hooks/useLocalStorage";

const key = `likes`;

const FavsModal = ({modalStyle, setModalStyle, handleRemoveFromfavs, product }) => {

    const handleCloseModal = () => {
        console.log("handleCloseModal");
        setModalStyle("hide")
    }

    const handleRemove = () => {
        handleRemoveFromfavs(product.id);
        handleCloseModal();
    }

  return (
    <div className={`FavsModal modal ${modalStyle}`}>
        <div className='modal-content'>
            <div className='closebtn'>
                <span onClick={()=>handleCloseModal()} className="close">&times;</span>
            </div>
            <div className='modal-content-main'>
                <img src={product.imagePath} alt="" />
                <div className='prod-details'>
                    <h2>{product.title}</h2>
                    <h2 className='author'>{product.author}</h2>
                    <p onClick={()=>handleRemove()} className='favs-remove'>Remove from wishlist</p>
                    <h4 className='price'>${product.price} MXN</h4>
                    <NavLink  to={`/product/${product.id}`} className="view-details-btn">View all details</NavLink>
                </div>
            </div>
        </div>

    </div>
  )
}

export default FavsModal