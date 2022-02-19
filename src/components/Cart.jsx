import React, { useContext } from 'react'
import '../styles/Cart.scss'
import { CartContext } from '../context/CartContext'
import {NavLink } from 'react-router-dom'
import CartProduct from '../containers/CartProduct'

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
            <p className='oops'>Oops, your cart is empty at the moment.</p>
            <p className='quotes'>“The more that you read, the more things you will know. The more you learn, the more places you’ll go.” — Dr. Seuss :)</p>
            <NavLink to="/">Go explore</NavLink>
        </div>)
    }

    return (
    <div className='Cart '>
        <div className='cart-products'>
            <div className='cart-title'>
                <p>My future books</p>
            </div>
        {
            cartItems.map((cartItem) => ( 
                <>
                    <CartProduct  
                        key={cartItem.id}
                        cartProduct={cartItem}
                        handleClickOnRemove={handleClickOnRemove}
                    ></CartProduct>
                    <hr />
                </>
            ))
        }
        </div>
         <div className='btns-cont'>
            <NavLink to="/" className='btn-shop cart-btn'> Continue shopping </NavLink>
            <button className='btn-clear cart-btn' onClick={() => handleClickClear()}> Clear cart </button>
            <button className='btn-complete cart-btn' onClick={() => handleClickClear()}> Complete order </button>
        </div>
    </div>
  )
}

export default Cart