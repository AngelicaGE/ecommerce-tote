import React, {useContext, useState, useEffect} from 'react';
import cartIcon from '../assets/icons/bag-white-24.png'
import cartIconSmall from '../assets/icons/bag-white-16.png'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext';

const CarWidget = () => {
const {cartItems} = useContext(CartContext)
const {cartItemsAmount, userId} = useContext(UserContext)
const [isCartActive, setIsCartActive] = useState(false)

useEffect(() => {
  console.log("*** USE EFFECT WIDGET ***", userId)
  if(userId != null){
    setIsCartActive(cartItemsAmount>0)
  }else{
    setIsCartActive(cartItems.length>0)
  }
}, [cartItems, cartItemsAmount, userId])


  return (
      <div className='CarWidget'>
        <picture>
            <source media="(min-width:800px)" srcSet={cartIcon}></source>
            <img alt='cart icon' src={cartIconSmall}/>
        </picture>
        {
            isCartActive? <div className='point'></div> : ''
        }
        
      </div>
    );
};

export default CarWidget;
