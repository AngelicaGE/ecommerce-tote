import React, { useContext } from 'react'
import '../styles/Cart.scss'
import { CartContext } from '../context/CartContext'
import {NavLink } from 'react-router-dom'

const Cart = () => {
    const {cartItems, removeCartItem, clearCart} = useContext(CartContext)
    console.log("***** CART ITEMS ******")
    console.log(cartItems)

    const handleClickOnRemove = (productId) =>{
        removeCartItem(productId);
    }

    const handleClickClear = () => {
        console.log("click clear")
        clearCart()
    }

    if(cartItems.length == 0){
        return (<div className='CartEmpty'>
            <p className='oops'>Opps, your cart is empty at the moment.</p>
            <p className='quotes'>“The more that you read, the more things you will know. The more you learn, the more places you’ll go.” — Dr. Seuss :)</p>
            <NavLink to="/">Go explore</NavLink>
        </div>)
    }

    return (
    <div className='Cart '>
        <div className='cart-products'>
        {
            cartItems.map((cartItem) => ( 
                <div key={cartItem.id}>
                    <p>{cartItem.volumeInfo.title}: {cartItem.id}</p> 
                    <p>Amount {cartItem.amount}</p>
                    <button onClick={() => handleClickOnRemove(cartItem.id)} >Remove from cart</button>
                    <hr />
                </div>
            ))
        }
        </div>
        <div>
            <button onClick={() => handleClickClear()}> Clear cart </button>
        </div>
    </div>
  )
}

export default Cart