import React, {useContext} from 'react';
import cartIcon from '../assets/icons/bag-white-24.png'
import cartIconSmall from '../assets/icons/bag-white-16.png'
import { CartContext } from '../context/CartContext'

const CarWidget = () => {
const {cartItems} = useContext(CartContext)

  return (
      <div className='CarWidget'>
        <picture>
            <source media="(min-width:800px)" srcSet={cartIcon}></source>
            <img alt='cart icon' src={cartIconSmall}/>
        </picture>
        {
            cartItems.length > 0 ? <div className='point'></div> : ''
        }
        
      </div>
    );
};

export default CarWidget;
